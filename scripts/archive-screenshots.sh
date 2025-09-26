#!/bin/bash

# Archive Screenshots Script
# Moves all PNG files from .playwright-mcp/ to .playwright-mcp/archive/

# Get the project root directory (parent of scripts directory)
PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

PLAYWRIGHT_DIR="$PROJECT_ROOT/.playwright-mcp"
ARCHIVE_DIR="$PROJECT_ROOT/.playwright-mcp/archive"

# Check if .playwright-mcp directory exists
if [ ! -d "$PLAYWRIGHT_DIR" ]; then
    echo "Error: .playwright-mcp directory not found at $PLAYWRIGHT_DIR"
    exit 1
fi

# Create archive directory if it doesn't exist
if [ ! -d "$ARCHIVE_DIR" ]; then
    echo "Creating archive directory..."
    mkdir -p "$ARCHIVE_DIR"
fi

# Find and move all PNG files
PNG_FILES=$(find "$PLAYWRIGHT_DIR" -maxdepth 1 -name "*.png" -type f)

if [ -z "$PNG_FILES" ]; then
    echo "No PNG files found in $PLAYWRIGHT_DIR"
    exit 0
fi

echo "Found PNG files to archive:"
echo "$PNG_FILES"
echo ""

# Move each PNG file to archive with timestamp prefix
for file in $PNG_FILES; do
    filename=$(basename "$file")
    timestamp=$(date +"%Y%m%d-%H%M%S")
    new_name="${timestamp}-${filename}"

    echo "Moving: $filename → archive/$new_name"
    mv "$file" "$ARCHIVE_DIR/$new_name"
done

echo ""
echo "✅ Successfully archived $(echo "$PNG_FILES" | wc -l | tr -d ' ') PNG files to .playwright-mcp/archive/"