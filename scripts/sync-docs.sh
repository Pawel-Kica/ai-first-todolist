#!/bin/bash

# Sync Development Guidelines Script
# Copies content from .cursor/rules/always-apply/DEVELOPMENT_GUIDELINES.mdc to AGENTS.md, CLAUDE.md, and README.md

set -e

SOURCE_FILE=".cursor/rules/always-apply/DEVELOPMENT_GUIDELINES.mdc"
TARGET_FILES=("AGENTS.md" "CLAUDE.md" "README.md")

# Check if source file exists
if [[ ! -f "$SOURCE_FILE" ]]; then
    echo "Error: Source file $SOURCE_FILE does not exist"
    exit 1
fi

echo "🔄 Syncing content from $SOURCE_FILE..."

# Copy content to each target file
for target in "${TARGET_FILES[@]}"; do
    echo "Updating $target..."
    cp "$SOURCE_FILE" "$target"
    echo "✓ $target updated"
done

echo "✅ All files synced successfully"