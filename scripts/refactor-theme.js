const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'sections');
const htmlFiles = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.html'));

const replacements = [
  { from: /bg-white\/90/g, to: 'bg-slate-950/80' },
  { from: /bg-white\/50/g, to: 'bg-slate-900/50' },
  { from: /bg-white/g, to: 'bg-slate-900/40' },
  { from: /bg-slate-50/g, to: 'bg-transparent' },
  { from: /bg-gradient-to-br from-slate-50 to-brand-50/g, to: 'bg-transparent' },
  { from: /text-slate-800/g, to: 'text-white' },
  { from: /text-slate-600/g, to: 'text-slate-300' },
  { from: /text-slate-500/g, to: 'text-slate-400' },
  { from: /border-slate-200/g, to: 'border-slate-800' },
  { from: /border-slate-100/g, to: 'border-slate-800/50' },
  { from: /border-white/g, to: 'border-slate-800' },
  { from: /bg-slate-100/g, to: 'bg-slate-800/50' },
  { from: /bg-slate-200/g, to: 'bg-slate-800' },
];

for (const file of htmlFiles) {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  for (const r of replacements) {
    content = content.replace(r.from, r.to);
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

// Also update all-projects.html
const allProjectsPath = path.join(__dirname, 'all-projects.html');
if (fs.existsSync(allProjectsPath)) {
  let content = fs.readFileSync(allProjectsPath, 'utf8');
  for (const r of replacements) {
    content = content.replace(r.from, r.to);
  }
  fs.writeFileSync(allProjectsPath, content, 'utf8');
}

console.log('Refactored theme in HTML files.');
