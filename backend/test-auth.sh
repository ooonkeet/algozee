#!/bin/bash
# test-auth.sh - Test authentication endpoints

BASE_URL="http://localhost:5000/api"

echo "================================"
echo "🧪 Algozee Backend Auth Testing"
echo "================================"
echo ""

# Test 1: Health Check
echo "1️⃣  Testing health endpoint..."
curl -X GET "$BASE_URL/health" \
  -H "Content-Type: application/json" \
  -w "\n\n"

# Test 2: API Info
echo "2️⃣  Testing API info endpoint..."
curl -X GET "$BASE_URL" \
  -H "Content-Type: application/json" \
  -w "\n\n"

# Test 3: Register User
echo "3️⃣  Testing user registration..."
REGISTER_RESPONSE=$(curl -s -X POST "$BASE_URL/auth/register" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "TestPassword123"
  }')
echo "$REGISTER_RESPONSE" | jq '.'
echo ""

# Extract token from register response
TOKEN=$(echo "$REGISTER_RESPONSE" | jq -r '.token // empty')
REFRESH_TOKEN=$(echo "$REGISTER_RESPONSE" | jq -r '.refreshToken // empty')

if [ -z "$TOKEN" ]; then
  echo "⚠️  No token received from registration. Testing login instead..."
  
  # Test 4: Login
  echo "4️⃣  Testing user login..."
  LOGIN_RESPONSE=$(curl -s -X POST "$BASE_URL/auth/login" \
    -H "Content-Type: application/json" \
    -d '{
      "email": "test@example.com",
      "password": "TestPassword123"
    }')
  echo "$LOGIN_RESPONSE" | jq '.'
  echo ""
  
  TOKEN=$(echo "$LOGIN_RESPONSE" | jq -r '.token // empty')
  REFRESH_TOKEN=$(echo "$LOGIN_RESPONSE" | jq -r '.refreshToken // empty')
else
  echo "✅ Registration successful!"
  echo ""
fi

# Test 5: Get Current User (with token)
if [ ! -z "$TOKEN" ]; then
  echo "5️⃣  Testing get current user (protected route)..."
  curl -s -X GET "$BASE_URL/auth/me" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $TOKEN" \
    | jq '.'
  echo ""
  
  # Test 6: Refresh Token
  if [ ! -z "$REFRESH_TOKEN" ]; then
    echo "6️⃣  Testing refresh token..."
    curl -s -X POST "$BASE_URL/auth/refresh-token" \
      -H "Content-Type: application/json" \
      -d "{\"refreshToken\": \"$REFRESH_TOKEN\"}" \
      | jq '.'
    echo ""
  fi
  
  # Test 7: Get all problems
  echo "7️⃣  Testing get all problems..."
  curl -s -X GET "$BASE_URL/problems" \
    -H "Content-Type: application/json" \
    | jq '.'
  echo ""
else
  echo "❌ No token obtained. Cannot test protected routes."
fi

echo "================================"
echo "✅ Testing Complete!"
echo "================================"
