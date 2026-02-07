#!/bin/bash

echo "🚀 Starting Portfolio Application..."
echo "=================================="

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the React application
echo "🌐 Starting React development server..."
npm start
