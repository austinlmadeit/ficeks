const fs = require('fs');

async function scrape() {
  const url1 = 'https://www.google.com/search?q=Ficek+Insurance+Agency+Ltd&kgmid=/g/11b5wt3y1b';
  const url2 = 'https://www.google.com/search?q=Ficek+Insurance+Agency+Ltd&kgmid=/g/1xfsndh1';

  for (const url of [url1, url2]) {
    console.log('Fetching', url);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      }
    });
    const html = await res.text();
    fs.writeFileSync(url.includes('11b5wt3y1b') ? 'page1.html' : 'page2.html', html);
    console.log('Saved page html, size:', html.length);
  }
}

scrape();
