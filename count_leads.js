const fs = require('fs');
const content = fs.readFileSync('./src/data/leads.ts', 'utf8');

// Match keys like: "slug-name": {
const matches = [...content.matchAll(/^\s*"([^"]+)":\s*\{/gm)];
const keys = matches.map(m => m[1]);

console.log("Total leads found:", keys.length);
console.log("Lead Slugs list:", keys);
