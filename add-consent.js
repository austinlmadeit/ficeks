const fs = require('fs');

const consentHtml = 
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '4px' }}>
        <input type="checkbox" required id="consent" style={{ marginTop: '4px', width: '16px', height: '16px', accentColor: '#dc2626' }} />
        <label htmlFor="consent" style={{ fontSize: '13px', color: '#71717a', lineHeight: 1.5 }}>
          I agree to the <a href="/terms" target="_blank" style={{ color: '#09090b', textDecoration: 'underline' }}>Terms of Service</a> and <a href="/privacy" target="_blank" style={{ color: '#09090b', textDecoration: 'underline' }}>Privacy Policy</a>, and consent to being contacted regarding this request.
        </label>
      </div>
;

function insertBeforeButton(filePath, buttonStr) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('id="consent"')) return; // already added

  // Find the button and insert the consentHtml before it
  if (content.includes(buttonStr)) {
    content = content.replace(buttonStr, consentHtml + '\n      ' + buttonStr);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + filePath);
  } else {
    console.log('Could not find button string in ' + filePath);
  }
}

// ContactForm.js
insertBeforeButton('./components/ContactForm.js', '<button\n        type="submit"');

// SandboxQuoteForm.js
// We need to insert it in Step 3 before the Submit button
// Look for <button onClick={handleSubmit}
insertBeforeButton('./components/SandboxQuoteForm.js', '<button\n              onClick={handleSubmit}');

// QuoteWizard.js
// Final step before submit.
// Look for <button onClick={handleSubmit}
insertBeforeButton('./components/QuoteWizard.js', '<button\n                onClick={handleSubmit}');

// HeroQuoteWidget.js
// Has a form?
insertBeforeButton('./components/HeroQuoteWidget.js', '<button\n              type="submit"');

