#!/usr/bin/env node

/**
 * Setup script for the search plugin
 * 
 * This script creates temporary files required by the @easyops-cn/docusaurus-search-local plugin.
 * The plugin requires a docs plugin with ID "default", but we need to keep our existing "android" ID
 * to maintain translations and existing functionality.
 * 
 * The generated files are:
 * - docs/_search_temp/README.md: Minimal content for the default plugin
 * - sidebarsDefault.js: Sidebar configuration for the default plugin
 * 
 * These files are automatically generated before build/start and are excluded from git.
 */

const fs = require('fs');
const path = require('path');

// Create _search_temp folder if it doesn't exist
const searchTempDir = path.join(__dirname, '..', 'docs', '_search_temp');
if (!fs.existsSync(searchTempDir)) {
  fs.mkdirSync(searchTempDir, { recursive: true });
}

// Create README.md for the default plugin
const readmePath = path.join(searchTempDir, 'README.md');
if (!fs.existsSync(readmePath)) {
  fs.writeFileSync(readmePath, '# Search Index\n\nThis folder exists only to provide a plugin instance for the search functionality.\n');
}

// Create sidebarsDefault.js if it doesn't exist
const sidebarsPath = path.join(__dirname, '..', 'sidebarsDefault.js');
if (!fs.existsSync(sidebarsPath)) {
  const sidebarsContent = `/**
 * Sidebar for the default plugin (used only for search functionality)
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: "doc",
      id: "README",
    },
  ],
};

export default sidebars;
`;
  fs.writeFileSync(sidebarsPath, sidebarsContent);
}

console.log('✓ Search plugin setup files created');

