const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'sections');
const htmlFiles = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.html'));

const replacements = [
  // 1. Harmonize width to max-w-7xl
  { from: /max-w-5xl/g, to: 'max-w-7xl' },
  { from: /max-w-6xl/g, to: 'max-w-7xl' },
  
  // 2. Adjust header height and top offset
  { from: /h-\[100px\]/g, to: 'h-[72px]' },
  { from: /top: 100px;/g, to: 'top: 72px;' },
  
  // 3. Adjust scroll-mt to match new header height (72px is roughly scroll-mt-18, but scroll-mt-20 (80px) gives a small breathing room, let's use scroll-mt-20)
  { from: /scroll-mt-32/g, to: 'scroll-mt-20' },
  { from: /scroll-mt-24/g, to: 'scroll-mt-20' },
  
  // For home.html specifically, adjust top padding so it doesn't look pushed down
  { from: /pt-\[72px\]/g, to: 'pt-24' }
];

for (const file of htmlFiles) {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  for (const r of replacements) {
    content = content.replace(r.from, r.to);
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

// Also update all-projects.html (if it's in the root)
const allProjectsPath = path.join(__dirname, 'all-projects.html');
if (fs.existsSync(allProjectsPath)) {
  let content = fs.readFileSync(allProjectsPath, 'utf8');
  for (const r of replacements) {
    content = content.replace(r.from, r.to);
  }
  fs.writeFileSync(allProjectsPath, content, 'utf8');
}

console.log('Harmonized widths and heights.');
