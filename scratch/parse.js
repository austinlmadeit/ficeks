const fs = require('fs');

function parse(filename) {
  const html = fs.readFileSync(filename, 'utf8');
  console.log('--- ' + filename + ' ---');
  
  // Search for review patterns or text blocks
  // Find strings like 5/5, 5 stars, or quote spans
  const lines = html.split('\n');
  for (const line of lines) {
    if (line.includes('star') || line.includes('review') || line.includes('Rating') || line.includes('Ficek')) {
      // Find visible text snippets
      const cleaned = line.replace(/<[^>]+>/g, ' | ').replace(/\s+/g, ' ');
      if (cleaned.length > 20) {
        console.log(cleaned.substring(0, 300));
      }
    }
  }
}

parse('page1.html');
parse('page2.html');
