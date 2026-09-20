const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.js') && !file.includes('node_modules') && !file.includes('.next')) {
      results.push(file);
    }
  });
  return results;
};

const files = [...walk('./app'), ...walk('./components')];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Single line standard 1fr 1fr
  content = content.replace(/style=\{\{ display: 'grid', gridTemplateColumns: '1fr 1fr'/g, 'className=\"grid-2\" style={{');
  
  // Custom fractions (1.2fr 1fr, 1.4fr 0.8fr) -> convert to grid-2
  content = content.replace(/style=\{\{ display: 'grid', gridTemplateColumns: '1\.2fr 1fr'/g, 'className=\"grid-2\" style={{');
  content = content.replace(/style=\{\{ display: 'grid', gridTemplateColumns: '1\.4fr 0\.8fr'/g, 'className=\"grid-2\" style={{');
  
  // 3 columns
  content = content.replace(/style=\{\{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'/g, 'className=\"grid-3\" style={{');
  content = content.replace(/style=\{\{ display: 'grid', gridTemplateColumns: '1fr 2fr 2fr'/g, 'className=\"grid-3\" style={{');
  
  // Multi-line replacement for app/page.js
  content = content.replace(/display:\s*'grid',\s*gridTemplateColumns:\s*'1fr 1fr',/g, '/* grid-2 */');
  
  if (content !== originalContent) {
    // For app/page.js multi-line fix:
    content = content.replace(/style=\{\{\s*\/\* grid-2 \*\//g, 'className=\"grid-2\" style={{');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  }
});
