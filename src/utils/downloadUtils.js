// Download utilities for email campaign content

/**
 * Downloads campaign content as a text file
 * @param {string} content - The content to download
 * @param {string} filename - The filename for the download
 */
export const downloadCampaign = (content, filename) => {
  try {
    // Create a blob with the content
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    
    // Create a download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    
    // Append to DOM, click, and cleanup
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    window.URL.revokeObjectURL(url);
    
    console.log(`Campaign downloaded successfully as ${filename}`);
  } catch (error) {
    console.error('Error downloading campaign:', error);
    // Fallback: try to open in new window for copy-paste
    fallbackDownload(content, filename);
  }
};

/**
 * Fallback download method that opens content in a new window
 * @param {string} content - The content to display
 * @param {string} filename - The filename for reference
 */
const fallbackDownload = (content, filename) => {
  try {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${filename}</title>
          <style>
            body { 
              font-family: monospace; 
              white-space: pre-wrap; 
              padding: 20px; 
              line-height: 1.6;
              background: #f5f5f5;
            }
            .header {
              background: #333;
              color: white;
              padding: 15px;
              margin: -20px -20px 20px -20px;
              font-family: sans-serif;
            }
            .content {
              background: white;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .instructions {
              background: #e3f2fd;
              border: 1px solid #2196f3;
              border-radius: 5px;
              padding: 15px;
              margin-bottom: 20px;
              font-family: sans-serif;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>📧 Email Campaign Content</h2>
            <p>File: ${filename}</p>
          </div>
          
          <div class="instructions">
            <strong>📋 Instructions:</strong><br>
            1. Select all content below (Ctrl+A or Cmd+A)<br>
            2. Copy it (Ctrl+C or Cmd+C)<br>
            3. Paste into your email marketing tool or text editor<br>
            4. Save the file manually if needed
          </div>
          
          <div class="content">
${content}
          </div>
        </body>
        </html>
      `);
      newWindow.document.close();
    } else {
      // If popup blocked, show alert with instructions
      alert(`Popup blocked! Here's how to save your campaign:\n\n1. Copy this content:\n\n${content}\n\n2. Paste it into a text editor\n3. Save as "${filename}"`);
    }
  } catch (error) {
    console.error('Fallback download failed:', error);
    // Last resort: show content in alert
    alert(`Download failed. Here's your campaign content:\n\n${content}`);
  }
};

/**
 * Formats campaign content for better readability in downloads
 * @param {Object} campaign - The campaign object
 * @returns {string} Formatted campaign text
 */
export const formatCampaignForDownload = (campaign) => {
  const timestamp = new Date().toLocaleString();
  
  return `EMAIL CAMPAIGN GENERATOR
Generated on: ${timestamp}

${'='.repeat(50)}

📧 SUBJECT LINES
${'-'.repeat(20)}
${campaign.subjectLines.map((line, i) => `${i + 1}. ${line}`).join('\n')}

👁️ PREVIEW TEXT OPTIONS
${'-'.repeat(20)}
${campaign.previewText.map((text, i) => `${i + 1}. ${text}`).join('\n')}

📝 EMAIL BODY
${'-'.repeat(20)}
${campaign.emailBody}

🎯 CALL-TO-ACTION SUGGESTIONS
${'-'.repeat(20)}
${campaign.callToActions.map((cta, i) => `${i + 1}. ${cta}`).join('\n')}

${'='.repeat(50)}

💡 TIPS FOR SUCCESS:
• Test different subject lines to find the best performer
• Keep preview text under 150 characters
• Use clear, compelling call-to-actions
• A/B test your campaigns for better results
• Ensure mobile-friendly email design

Happy emailing! 🚀
`;
};

/**
 * Downloads campaign in a specific format (txt, md, or html)
 * @param {Object} campaign - The campaign object
 * @param {string} format - The desired format (txt, md, html)
 * @param {string} filename - Base filename without extension
 */
export const downloadCampaignInFormat = (campaign, format = 'txt', filename = 'email-campaign') => {
  let content, mimeType, extension;
  
  switch (format.toLowerCase()) {
    case 'md':
      content = formatCampaignAsMarkdown(campaign);
      mimeType = 'text/markdown;charset=utf-8';
      extension = 'md';
      break;
    case 'html':
      content = formatCampaignAsHTML(campaign);
      mimeType = 'text/html;charset=utf-8';
      extension = 'html';
      break;
    default:
      content = formatCampaignForDownload(campaign);
      mimeType = 'text/plain;charset=utf-8';
      extension = 'txt';
  }
  
  const fullFilename = `${filename}.${extension}`;
  downloadCampaign(content, fullFilename);
};

/**
 * Formats campaign as Markdown
 * @param {Object} campaign - The campaign object
 * @returns {string} Markdown formatted campaign
 */
const formatCampaignAsMarkdown = (campaign) => {
  const timestamp = new Date().toLocaleString();
  
  return `# Email Campaign Generator

**Generated on:** ${timestamp}

---

## 📧 Subject Lines

${campaign.subjectLines.map((line, i) => `${i + 1}. ${line}`).join('\n')}

## 👁️ Preview Text Options

${campaign.previewText.map((text, i) => `${i + 1}. ${text}`).join('\n')}

## 📝 Email Body

${campaign.emailBody}

## 🎯 Call-to-Action Suggestions

${campaign.callToActions.map((cta, i) => `${i + 1}. ${cta}`).join('\n')}

---

### 💡 Tips for Success

- Test different subject lines to find the best performer
- Keep preview text under 150 characters
- Use clear, compelling call-to-actions
- A/B test your campaigns for better results
- Ensure mobile-friendly email design

*Happy emailing! 🚀*
`;
};

/**
 * Formats campaign as HTML
 * @param {Object} campaign - The campaign object
 * @returns {string} HTML formatted campaign
 */
const formatCampaignAsHTML = (campaign) => {
  const timestamp = new Date().toLocaleString();
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Campaign</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; background: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h1 { color: #333; border-bottom: 3px solid #007bff; padding-bottom: 10px; }
        h2 { color: #007bff; margin-top: 30px; }
        .timestamp { color: #666; font-style: italic; margin-bottom: 30px; }
        .section { margin-bottom: 25px; }
        .option { background: #f8f9fa; padding: 15px; margin: 10px 0; border-left: 4px solid #007bff; border-radius: 5px; }
        .tips { background: #e3f2fd; padding: 20px; border-radius: 8px; margin-top: 30px; }
        .emoji { font-size: 1.2em; }
    </style>
</head>
<body>
    <div class="container">
        <h1><span class="emoji">📧</span> Email Campaign Generator</h1>
        <div class="timestamp">Generated on: ${timestamp}</div>
        
        <div class="section">
            <h2><span class="emoji">📧</span> Subject Lines</h2>
            ${campaign.subjectLines.map((line, i) => `<div class="option"><strong>${i + 1}.</strong> ${line}</div>`).join('')}
        </div>
        
        <div class="section">
            <h2><span class="emoji">👁️</span> Preview Text Options</h2>
            ${campaign.previewText.map((text, i) => `<div class="option"><strong>${i + 1}.</strong> ${text}</div>`).join('')}
        </div>
        
        <div class="section">
            <h2><span class="emoji">📝</span> Email Body</h2>
            <div class="option">${campaign.emailBody.replace(/\n/g, '<br>')}</div>
        </div>
        
        <div class="section">
            <h2><span class="emoji">🎯</span> Call-to-Action Suggestions</h2>
            ${campaign.callToActions.map((cta, i) => `<div class="option"><strong>${i + 1}.</strong> ${cta}</div>`).join('')}
        </div>
        
        <div class="tips">
            <h3><span class="emoji">💡</span> Tips for Success</h3>
            <ul>
                <li>Test different subject lines to find the best performer</li>
                <li>Keep preview text under 150 characters</li>
                <li>Use clear, compelling call-to-actions</li>
                <li>A/B test your campaigns for better results</li>
                <li>Ensure mobile-friendly email design</li>
            </ul>
        </div>
        
        <p style="text-align: center; margin-top: 30px; color: #666;">
            <em>Happy emailing! <span class="emoji">🚀</span></em>
        </p>
    </div>
</body>
</html>`;
};
