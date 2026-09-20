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

  content = content.replace(/style=\{\{, /g, 'style={{ ');
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed ' + file);
  }
});
