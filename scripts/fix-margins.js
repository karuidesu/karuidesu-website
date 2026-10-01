const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'sections');
const htmlFiles = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.html'));

for (const file of htmlFiles) {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace large top/bottom padding with a smaller one
  content = content.replace(/py-24/g, 'py-10');
  
  // Replace huge min-height on home
  content = content.replace(/min-h-\[120vh\]/g, 'min-h-screen');
  
  // Replace pt-24 on home to py-10
  content = content.replace(/pt-24/g, 'py-10');
  
  // Ensure projects.html has scroll-mt-20
  if (file === 'projects.html') {
    if (!content.includes('scroll-mt-20')) {
      content = content.replace('class="min-h-screen', 'class="scroll-mt-20 min-h-screen');
    }
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
}

// Also update all-projects.html (if it's in the root)
const allProjectsPath = path.join(__dirname, 'all-projects.html');
if (fs.existsSync(allProjectsPath)) {
  let content = fs.readFileSync(allProjectsPath, 'utf8');
  content = content.replace(/pt-32 pb-24/g, 'pt-28 pb-10');
  content = content.replace(/py-24/g, 'py-10');
  fs.writeFileSync(allProjectsPath, content, 'utf8');
}

console.log('Fixed margins.');
