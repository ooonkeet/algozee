// seeds/seedProblems.js
// Reads the hardcoded problem list from app.js and upserts them into MongoDB.
// Run with: npm run seed
// ─────────────────────────────────────────────────────────────────────────────
require('dotenv').config();
const mongoose = require('mongoose');
const path     = require('path');
const fs       = require('fs');

const connectDB = require('../config/db');
const Problem   = require('../models/Problem');

// ─── Extract problems array from app.js via regex ────────────────────────────
function extractProblems() {
  const appJsPath = path.resolve(__dirname, '..', '..', 'app.js');
  if (!fs.existsSync(appJsPath)) {
    console.error('❌ app.js not found at', appJsPath);
    process.exit(1);
  }

  const src = fs.readFileSync(appJsPath, 'utf8');

  // Find the problems array block between `problems: [` and the matching `]`
  const startMarker = 'problems: [';
  const start = src.indexOf(startMarker);
  if (start === -1) { console.error('❌ Could not locate problems array in app.js'); process.exit(1); }

  // Walk forward, counting brackets to find the closing ]
  let depth = 0;
  let i = start + startMarker.length - 1; // point at '['
  const arrayStart = i;
  while (i < src.length) {
    if (src[i] === '[') depth++;
    else if (src[i] === ']') { depth--; if (depth === 0) break; }
    i++;
  }

  const rawArray = src.slice(arrayStart, i + 1);

  // Evaluate safely using Function constructor (no global scope pollution)
  let problems;
  try {
    // eslint-disable-next-line no-new-func
    problems = new Function(`"use strict"; return ${rawArray};`)();
  } catch (err) {
    console.error('❌ Failed to parse problems array:', err.message);
    process.exit(1);
  }

  return problems;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function seed() {
  await connectDB();

  const problems = extractProblems();
  console.log(`📦 Found ${problems.length} problems in app.js`);

  let inserted = 0;
  let updated  = 0;
  let skipped  = 0;

  for (const p of problems) {
    // Skip placeholder / synthetic IDs (e.g. id=9999)
    if (!p.id || p.id > 9000) { skipped++; continue; }

    const doc = {
      leetcodeId:  p.id,
      name:        p.name,
      difficulty:  p.difficulty,       // 'easy' | 'medium' | 'hard'
      topic:       p.topic,
      subcategory: p.subcategory || '',
      acceptance:  p.acceptance  || '',
      isActive:    true,
    };

    try {
      const existing = await Problem.findOne({ leetcodeId: p.id });
      if (existing) {
        await Problem.findByIdAndUpdate(existing._id, doc);
        updated++;
      } else {
        await Problem.create(doc);
        inserted++;
      }
    } catch (err) {
      console.warn(`⚠️  Problem ${p.id} (${p.name}): ${err.message}`);
      skipped++;
    }
  }

  console.log(`\n✅ Seed complete`);
  console.log(`   Inserted : ${inserted}`);
  console.log(`   Updated  : ${updated}`);
  console.log(`   Skipped  : ${skipped}`);
  console.log(`   Total    : ${problems.length}`);

  await mongoose.disconnect();
  process.exit(0);
}

seed().catch(err => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});
