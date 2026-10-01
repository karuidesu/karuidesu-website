const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'sections');
const htmlFiles = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.html'));

for (const file of htmlFiles) {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace min-h-screen with min-h-[calc(100vh-72px)]
  content = content.replace(/min-h-screen/g, 'min-h-[calc(100vh-72px)]');
  
  // Replace min-h-[80vh] with min-h-[calc(100vh-72px)] to be consistent
  content = content.replace(/min-h-\[80vh\]/g, 'min-h-[calc(100vh-72px)]');
  
  // Fix the missing projects_all.html replacement
  if (file === 'projects_all.html') {
    content = content.replace(/pt-32 pb-24/g, 'py-10');
  }

  // Just to be sure, also check for scroll-mt-20 and set it to scroll-mt-[72px] for exact precision
  content = content.replace(/scroll-mt-20/g, 'scroll-mt-[72px]');

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Fixed min-height for perfect centering.');
