# 🚀 Email Campaign Generator

A powerful React-based web application that generates compelling Product Launch Email Campaigns using Generative AI. Create professional, engaging email campaigns with just a few clicks!

## ✨ Features

### 🎯 Core Functionality
- **Product Details Input**: Enter product name, description, target audience, and launch date
- **Campaign Tone Selection**: Choose from Professional, Exciting, Minimal, or Playful tones
- **AI-Powered Generation**: Generate complete email campaigns using advanced AI models
- **Multiple Content Sections**: Subject lines, preview text, email body, and call-to-action suggestions

### 🎨 User Experience
- **Beautiful UI**: Modern, responsive design with TailwindCSS
- **Smooth Animations**: Framer Motion animations for delightful interactions
- **Interactive Cards**: Each campaign section displayed in styled, interactive cards
- **Real-time Feedback**: Instant validation and user feedback

### 🔧 Advanced Features
- **Regenerate Sections**: Get alternative versions of any campaign section
- **Copy to Clipboard**: One-click copying of any text content
- **Download Campaign**: Export campaigns as TXT, Markdown, or HTML files
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **Frontend**: React 18 with functional components and hooks
- **Styling**: TailwindCSS for modern, responsive design
- **Animations**: Framer Motion for smooth, engaging animations
- **AI Integration**: OpenAI, Anthropic, or Google Gemini APIs
- **Build Tool**: Create React App with optimized build process
- **State Management**: React hooks for efficient state handling

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Modern web browser
- (Optional) AI API key for enhanced content generation

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Maniyajeswani/product-launch-automated-email-campaigns.git
   cd product-launch-automated-email-campaigns
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### AI Integration (Optional)

To use real AI-generated content instead of mock responses:

1. **Get an API key** from your preferred AI provider:
   - [OpenAI](https://platform.openai.com/api-keys)
   - [Anthropic](https://console.anthropic.com/)
   - [Google Gemini](https://makersuite.google.com/app/apikey)

2. **Create a `.env` file** in the project root:
   ```env
   # OpenAI
   REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
   
   # Anthropic
   REACT_APP_ANTHROPIC_API_KEY=your_anthropic_api_key_here
   
   # Google Gemini
   REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Restart the development server**
   ```bash
   npm start
   ```

## 📖 How to Use

### 1. Campaign Setup
- Fill in your product details (name, description, target audience, launch date)
- Select the desired campaign tone that matches your brand voice
- Click "Generate Email Campaign" to create your campaign

### 2. Campaign Review
- Review generated subject lines and choose the most compelling option
- Check preview text for optimal email client display
- Read through the email body content
- Select appropriate call-to-action buttons

### 3. Customization
- Use "Regenerate" buttons to get alternative versions of any section
- Copy specific content to your clipboard with one click
- Download the complete campaign for use in your email marketing tools

### 4. Export & Use
- Download campaigns in multiple formats (TXT, MD, HTML)
- Copy content directly to your email marketing platform
- Use generated content as inspiration for your final campaigns

## 🏗️ Project Structure

```
product-launch-automated-email-campaigns/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CampaignForm.js          # Campaign setup form
│   │   ├── EmailCampaign.js         # Main campaign display
│   │   └── EmailPreviewCard.js      # Individual section cards
│   ├── services/
│   │   └── aiService.js             # AI integration service
│   ├── utils/
│   │   └── downloadUtils.js         # Download functionality
│   ├── App.js                       # Main application component
│   ├── index.js                     # Application entry point
│   └── index.css                    # Global styles
├── config.js                        # Configuration file
├── package.json                     # Dependencies and scripts
├── tailwind.config.js              # TailwindCSS configuration
└── README.md                        # This file
```

## 🔧 Configuration

The application is highly configurable through the `config.js` file:

- **AI Provider Selection**: Choose between OpenAI, Anthropic, or Google Gemini
- **Campaign Settings**: Customize content generation parameters
- **UI Customization**: Modify colors, animations, and layout
- **Feature Flags**: Enable/disable specific functionality
- **Validation Rules**: Customize form validation requirements

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for custom colors and animations
- Update `src/index.css` for global style overrides
- Customize component-specific styles in individual component files

### AI Integration
- Extend `src/services/aiService.js` for additional AI providers
- Modify prompt templates for different content types
- Add custom response processing logic

### Features
- Enable/disable features through `config.js`
- Add new campaign sections by extending the components
- Implement additional export formats in `downloadUtils.js`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload the `build` folder to an S3 bucket
- **Traditional Hosting**: Upload files to your web server

### Environment Variables
Remember to set your AI API keys in your production environment variables.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **TailwindCSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **OpenAI/Anthropic/Google** for AI capabilities
- **Open Source Community** for inspiration and tools

## 🆘 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs or request features through GitHub Issues
- **Discussions**: Join community discussions for help and ideas

## 🔮 Roadmap

- [ ] A/B testing for campaign optimization
- [ ] Campaign analytics and performance tracking
- [ ] Template library with pre-built campaigns
- [ ] Collaboration features for team campaigns
- [ ] Integration with popular email marketing platforms
- [ ] Advanced AI prompt customization
- [ ] Multi-language support
- [ ] Campaign scheduling and automation

---

**Happy Email Campaigning! 🚀📧**

Built with ❤️ using React, TailwindCSS, and Framer Motion.
