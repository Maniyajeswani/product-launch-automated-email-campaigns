// AI Service for Email Campaign Generation
// This service provides mock responses for development and can be easily extended with real AI APIs

// Configuration - Update these values when integrating with real AI APIs
const AI_CONFIG = {
  // API Configuration
  OPENAI_API_URL: 'https://api.openai.com/v1/chat/completions',
  OPENAI_API_KEY: process.env.REACT_APP_OPENAI_API_KEY,
  
  // Alternative APIs
  ANTHROPIC_API_URL: 'https://api.anthropic.com/v1/messages',
  ANTHROPIC_API_KEY: process.env.REACT_APP_ANTHROPIC_API_KEY,
  
  // Model Configuration
  DEFAULT_MODEL: 'gpt-4',
  MAX_TOKENS: 1000,
  TEMPERATURE: 0.7,
  
  // Mock Response Settings
  USE_MOCK_RESPONSES: !process.env.REACT_APP_OPENAI_API_KEY, // Use mock if no API key
  MOCK_DELAY: 1000, // Simulate API delay
};

// Mock Response Templates - These provide realistic fallback content
const MOCK_TEMPLATES = {
  professional: {
    subjectLines: [
      "Introducing {productName}: A Revolutionary Solution for {targetAudience}",
      "Transform Your {targetAudience} Experience with {productName}",
      "{productName} Launch: Professional-Grade Innovation for {targetAudience}",
      "Elevate Your {targetAudience} Capabilities with {productName}",
      "The Future of {targetAudience} is Here: {productName} Launch"
    ],
    previewText: [
      "Discover how {productName} can revolutionize your {targetAudience} workflow and boost productivity.",
      "Join industry leaders who are already leveraging {productName} for superior {targetAudience} results.",
      "Learn about the advanced features that make {productName} the preferred choice for {targetAudience} professionals."
    ],
    emailBody: `Dear Valued Customer,

We are pleased to announce the official launch of {productName}, a groundbreaking solution designed specifically for {targetAudience}.

{description}

{productName} represents the culmination of extensive research and development, addressing the critical needs of {targetAudience} professionals. Our team has worked tirelessly to deliver a product that exceeds industry standards and provides tangible value to your operations.

Key Benefits:
• Enhanced efficiency and productivity
• Advanced features tailored for {targetAudience}
• Professional-grade reliability and support
• Competitive pricing for early adopters

Launch Date: {launchDate}

We invite you to be among the first to experience the transformative capabilities of {productName}. Our team is ready to provide comprehensive support and ensure a smooth implementation process.

Best regards,
The {productName} Team`,
    callToActions: [
      "Schedule a Product Demo",
      "Request Pricing Information",
      "Download Product Brochure",
      "Contact Sales Team"
    ]
  },
  
  exciting: {
    subjectLines: [
      "🚀 {productName} is HERE! Don't Miss the Launch of the Century!",
      "BREAKING: {productName} Just Dropped - Game Changer for {targetAudience}!",
      "🎉 {productName} Launch Day! Your {targetAudience} Will Never Be the Same!",
      "🔥 {productName} is Finally Live! Revolutionary {targetAudience} Solution!",
      "⚡ {productName} Launch Alert! The Future of {targetAudience} Starts NOW!"
    ],
    previewText: [
      "Get ready to revolutionize your {targetAudience} with the most innovative product launch of the year!",
      "The moment you've been waiting for is here! {productName} is about to change everything for {targetAudience}.",
      "Brace yourself for the most exciting {targetAudience} innovation in decades - {productName} is launching!"
    ],
    emailBody: `🎉 EXCITING NEWS! 🎉

{productName} is OFFICIALLY LAUNCHING and it's going to blow your mind!

{description}

This isn't just another product - it's a REVOLUTION for {targetAudience}! We've packed {productName} with cutting-edge features that will transform how you approach {targetAudience} forever.

🚀 What Makes {productName} Special:
• Revolutionary technology that's years ahead of the competition
• Game-changing features designed specifically for {targetAudience}
• Lightning-fast performance that will amaze you
• Pricing that will make your competitors jealous

🎯 Launch Date: {launchDate}

Don't wait! This is your chance to be at the forefront of {targetAudience} innovation. Early adopters get exclusive benefits and pricing that won't last long.

The future is here, and it's called {productName}!`,
    callToActions: [
      "🚀 Get It Now - Limited Time!",
      "🎯 See It in Action - Watch Demo!",
      "🔥 Join the Revolution - Sign Up!",
      "⚡ Early Bird Special - Claim Yours!"
    ]
  },
  
  minimal: {
    subjectLines: [
      "{productName} Launch",
      "New: {productName}",
      "{productName} is Available",
      "Introducing {productName}",
      "{productName} - Now Live"
    ],
    previewText: [
      "{productName} is now available for {targetAudience}.",
      "Simple. Effective. {productName}.",
      "The {targetAudience} solution you've been waiting for."
    ],
    emailBody: `{productName}

{description}

Available: {launchDate}

For {targetAudience}.

{productName} Team`,
    callToActions: [
      "Learn More",
      "Get Started",
      "View Details",
      "Contact Us"
    ]
  },
  
  playful: {
    subjectLines: [
      "🎈 {productName} is Having a Launch Party - You're Invited!",
      "🎪 Step Right Up! {productName} is Finally Here!",
      "🎭 The {productName} Show is About to Begin!",
      "🎨 {productName} is Painting the Town with Innovation!",
      "🎪 Welcome to the Greatest {productName} Show on Earth!"
    ],
    previewText: [
      "Come join the fun! {productName} is launching and it's going to be a blast for {targetAudience}!",
      "Get ready to play with the coolest {targetAudience} tool ever - {productName} is here!",
      "Time to have some fun! {productName} is launching and it's going to make {targetAudience} exciting!"
    ],
    emailBody: `🎉 Welcome to the {productName} Launch Party! 🎉

Guess what? {productName} is finally here and it's going to make {targetAudience} so much fun!

{description}

We've created something special for {targetAudience} - a product that's not just useful, but actually enjoyable to use! {productName} combines powerful functionality with a delightful user experience that will put a smile on your face.

🎪 What's Inside the {productName} Magic Box:
• Fun and intuitive features that make {targetAudience} exciting
• Playful design that brightens your day
• Powerful capabilities wrapped in joy
• A user experience that feels like play, not work

🎈 Launch Date: {launchDate}

Come join the celebration! {productName} is here to make {targetAudience} the highlight of your day.

Let's make some magic happen! ✨`,
    callToActions: [
      "🎈 Join the Party - Get Started!",
      "🎪 Take a Tour - See the Magic!",
      "🎨 Start Creating - Begin Your Journey!",
      "🎭 Get Your Ticket - Sign Up Now!"
    ]
  }
};

// Helper function to replace placeholders in templates
const replacePlaceholders = (template, data) => {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return data[key] || match;
  });
};

// Generate mock responses based on tone and product details
const generateMockResponse = (formData, section = null) => {
  const tone = formData.tone || 'professional';
  const templates = MOCK_TEMPLATES[tone];
  
  if (section && templates[section]) {
    return templates[section].map(template => 
      replacePlaceholders(template, formData)
    );
  }
  
  return {
    subjectLines: templates.subjectLines.map(template => 
      replacePlaceholders(template, formData)
    ),
    previewText: templates.previewText.map(template => 
      replacePlaceholders(template, formData)
    ),
    emailBody: replacePlaceholders(templates.emailBody, formData),
    callToActions: templates.callToActions.map(template => 
      replacePlaceholders(template, formData)
    )
  };
};

// Simulate API delay for realistic experience
const simulateAPIDelay = (delay = AI_CONFIG.MOCK_DELAY) => {
  return new Promise(resolve => setTimeout(resolve, delay));
};

// Main function to generate email campaign
export const generateEmailCampaign = async (formData, specificSection = null) => {
  try {
    // Check if we should use mock responses
    if (AI_CONFIG.USE_MOCK_RESPONSES) {
      console.log('Using mock responses - no API key configured');
      await simulateAPIDelay();
      return generateMockResponse(formData, specificSection);
    }

    // TODO: INTEGRATE WITH REAL AI API HERE
    // This is where you'll add the actual API call to OpenAI, Anthropic, or other AI services
    
    // Example OpenAI integration (uncomment and configure when ready):
    /*
    const response = await fetch(AI_CONFIG.OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AI_CONFIG.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: AI_CONFIG.DEFAULT_MODEL,
        messages: [
          {
            role: 'system',
            content: `You are an expert email marketing copywriter. Generate compelling email campaign content for a product launch.`
          },
          {
            role: 'user',
            content: `Generate a ${formData.tone} email campaign for ${formData.productName}: ${formData.description}. Target audience: ${formData.targetAudience}. Launch date: ${formData.launchDate}.`
          }
        ],
        max_tokens: AI_CONFIG.MAX_TOKENS,
        temperature: AI_CONFIG.TEMPERATURE,
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    // Process the AI response and return structured data
    return processAIResponse(data, specificSection);
    */

    // For now, fall back to mock responses
    console.log('AI API not configured, using mock responses');
    await simulateAPIDelay();
    return generateMockResponse(formData, specificSection);

  } catch (error) {
    console.error('Error generating email campaign:', error);
    
    // Fallback to mock responses on error
    console.log('Falling back to mock responses due to error');
    return generateMockResponse(formData, specificSection);
  }
};

// Process AI API response (implement when integrating real API)
const processAIResponse = (apiResponse, specificSection) => {
  // TODO: Implement response processing based on your chosen AI API
  // This will parse the AI response and structure it for the frontend
  
  console.log('AI API response received:', apiResponse);
  
  // Placeholder return - replace with actual processing logic
  return {
    subjectLines: ['AI Generated Subject Line 1', 'AI Generated Subject Line 2'],
    previewText: ['AI Generated Preview Text 1', 'AI Generated Preview Text 2'],
    emailBody: 'AI Generated Email Body Content',
    callToActions: ['AI Generated CTA 1', 'AI Generated CTA 2']
  };
};

// Export configuration for external use
export const getAIConfig = () => ({ ...AI_CONFIG });

// Export mock templates for testing
export const getMockTemplates = () => ({ ...MOCK_TEMPLATES });
