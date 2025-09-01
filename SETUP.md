# 🚀 Email Campaign Generator - Setup Guide

This guide will help you set up the Email Campaign Generator with AI integration and get it running on your local machine.

## 📋 Prerequisites

- **Node.js**: Version 16 or higher
- **npm**: Usually comes with Node.js
- **Git**: For cloning the repository
- **Modern Browser**: Chrome, Firefox, Safari, or Edge

## 🛠️ Installation Steps

### 1. Clone and Navigate
```bash
git clone <your-repository-url>
cd proj2-email_automation
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```

The application will open automatically in your browser at `http://localhost:3000`

## 🤖 AI Integration Setup

The application works out-of-the-box with mock responses, but you can enhance it with real AI-generated content by following these steps:

### Option 1: OpenAI Integration

1. **Get an API Key**
   - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
   - Sign up or log in to your account
   - Create a new API key
   - Copy the key (it starts with `sk-`)

2. **Configure Environment**
   - Create a `.env` file in the project root
   - Add your API key:
   ```env
   REACT_APP_OPENAI_API_KEY=sk-your-api-key-here
   ```

3. **Update Configuration**
   - Open `config.js`
   - Set `DEFAULT_PROVIDER: 'OPENAI'`

### Option 2: Anthropic (Claude) Integration

1. **Get an API Key**
   - Visit [Anthropic Console](https://console.anthropic.com/)
   - Sign up or log in to your account
   - Create a new API key
   - Copy the key (it starts with `sk-ant-`)

2. **Configure Environment**
   ```env
   REACT_APP_ANTHROPIC_API_KEY=sk-ant-your-api-key-here
   ```

3. **Update Configuration**
   - Open `config.js`
   - Set `DEFAULT_PROVIDER: 'ANTHROPIC'`

### Option 3: Google Gemini Integration

1. **Get an API Key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account
   - Create a new API key
   - Copy the key

2. **Configure Environment**
   ```env
   REACT_APP_GEMINI_API_KEY=your-gemini-api-key-here
   ```

3. **Update Configuration**
   - Open `config.js`
   - Set `DEFAULT_PROVIDER: 'GEMINI'`

## 🔧 Configuration Options

### AI Settings (`config.js`)

```javascript
AI: {
  // Change the default provider
  DEFAULT_PROVIDER: 'OPENAI', // or 'ANTHROPIC', 'GEMINI'
  
  // Adjust AI parameters
  MAX_TOKENS: 1000,
  TEMPERATURE: 0.7,
  
  // Mock response settings
  USE_MOCK_IF_NO_KEY: true,
  MOCK_DELAY: 1000,
}
```

### Campaign Settings

```javascript
CAMPAIGN: {
  // Number of options generated
  SUBJECT_LINE_OPTIONS: 5,
  PREVIEW_TEXT_OPTIONS: 3,
  CALL_TO_ACTION_OPTIONS: 4,
  
  // Content length limits
  MAX_SUBJECT_LINE_LENGTH: 60,
  MAX_PREVIEW_TEXT_LENGTH: 150,
  MAX_EMAIL_BODY_LENGTH: 500,
}
```

### UI Customization

```javascript
UI: {
  // Animation settings
  ANIMATIONS: {
    ENABLED: true,
    DURATION: 0.6,
  },
  
  // Color scheme
  COLORS: {
    PRIMARY: '#3b82f6',
    SUCCESS: '#22c55e',
    WARNING: '#f59e0b',
  },
}
```

## 🎯 Usage Examples

### Basic Campaign Generation

1. **Fill out the form**:
   - Product Name: "SmartHome Hub Pro"
   - Description: "AI-powered home automation system"
   - Target Audience: "Tech-savvy homeowners"
   - Launch Date: "2024-03-15"
   - Tone: "Professional"

2. **Click "Generate Email Campaign"**

3. **Review and customize** the generated content

### Regenerating Sections

- Use the "Regenerate" button on any section to get alternative versions
- Perfect for A/B testing different approaches

### Exporting Campaigns

- **Copy to Clipboard**: Click the copy icon on any text block
- **Download**: Use the download button to save as TXT, MD, or HTML

## 🚨 Troubleshooting

### Common Issues

#### 1. "Module not found" errors
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

#### 2. AI API not working
- Check your `.env` file exists and has the correct API key
- Verify the API key is valid and has sufficient credits
- Check browser console for error messages
- Ensure you've restarted the development server after adding environment variables

#### 3. Styling issues
```bash
# Rebuild TailwindCSS
npm run build:css
```

#### 4. Port already in use
```bash
# Use a different port
PORT=3001 npm start
```

### Debug Mode

Enable debug logging by adding to your `.env`:
```env
REACT_APP_DEBUG=true
```

## 🔒 Security Notes

- **Never commit your `.env` file** to version control
- **API keys are client-side** - consider using a backend proxy for production
- **Rate limiting** - be aware of your AI provider's rate limits
- **Cost monitoring** - track your API usage to avoid unexpected charges

## 📱 Production Deployment

### Build for Production
```bash
npm run build
```

### Environment Variables in Production
Set these in your hosting platform:
- `REACT_APP_OPENAI_API_KEY`
- `REACT_APP_ANTHROPIC_API_KEY`
- `REACT_APP_GEMINI_API_KEY`

### Recommended Hosting Platforms
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3 + CloudFront**: For enterprise deployments
- **Traditional hosting**: Upload `build` folder to your web server

## 🧪 Testing

### Run Tests
```bash
npm test
```

### Test AI Integration
1. Set up a valid API key
2. Generate a campaign
3. Check browser console for API calls
4. Verify content is AI-generated (not mock)

### Test Mock Fallback
1. Remove or invalidate your API key
2. Generate a campaign
3. Verify mock responses are used
4. Check console for fallback messages

## 📚 Additional Resources

- **React Documentation**: [react.dev](https://react.dev)
- **TailwindCSS**: [tailwindcss.com](https://tailwindcss.com)
- **Framer Motion**: [framer.com/motion](https://framer.com/motion)
- **OpenAI API**: [platform.openai.com/docs](https://platform.openai.com/docs)
- **Anthropic API**: [docs.anthropic.com](https://docs.anthropic.com)
- **Google Gemini**: [ai.google.dev/docs](https://ai.google.dev/docs)

## 🆘 Getting Help

- **Check the console** for error messages
- **Review the README.md** for comprehensive documentation
- **Check inline code comments** for implementation details
- **Open an issue** on GitHub for bugs or feature requests

---

**Happy Campaigning! 🚀📧**

If you encounter any issues, the application will gracefully fall back to mock responses, so you can always test the functionality even without AI integration.
