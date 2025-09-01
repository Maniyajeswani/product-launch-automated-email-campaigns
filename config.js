// Configuration file for Email Campaign Generator
// Update these values to customize the application and integrate with AI APIs

export const CONFIG = {
  // AI API Configuration
  AI: {
    // OpenAI Configuration
    OPENAI: {
      API_URL: 'https://api.openai.com/v1/chat/completions',
      API_KEY: process.env.REACT_APP_OPENAI_API_KEY,
      DEFAULT_MODEL: 'gpt-4',
      MAX_TOKENS: 1000,
      TEMPERATURE: 0.7,
    },
    
    // Anthropic Configuration
    ANTHROPIC: {
      API_URL: 'https://api.anthropic.com/v1/messages',
      API_KEY: process.env.REACT_APP_ANTHROPIC_API_KEY,
      DEFAULT_MODEL: 'claude-3-sonnet-20240229',
      MAX_TOKENS: 1000,
      TEMPERATURE: 0.7,
    },
    
    // Google Gemini Configuration
    GEMINI: {
      API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
      API_KEY: process.env.REACT_APP_GEMINI_API_KEY,
      DEFAULT_MODEL: 'gemini-pro',
      MAX_TOKENS: 1000,
      TEMPERATURE: 0.7,
    },
    
    // Default AI Provider (change this to switch between providers)
    DEFAULT_PROVIDER: 'OPENAI', // Options: 'OPENAI', 'ANTHROPIC', 'GEMINI'
    
    // Fallback to mock responses if no API key is provided
    USE_MOCK_IF_NO_KEY: true,
    
    // Simulated API delay for realistic experience (in milliseconds)
    MOCK_DELAY: 1000,
  },
  
  // Campaign Generation Settings
  CAMPAIGN: {
    // Number of options to generate for each section
    SUBJECT_LINE_OPTIONS: 5,
    PREVIEW_TEXT_OPTIONS: 3,
    CALL_TO_ACTION_OPTIONS: 4,
    
    // Maximum lengths for content
    MAX_SUBJECT_LINE_LENGTH: 60,
    MAX_PREVIEW_TEXT_LENGTH: 150,
    MAX_EMAIL_BODY_LENGTH: 500,
    
    // Campaign tone options
    AVAILABLE_TONES: [
      { value: 'professional', label: 'Professional', icon: '👔', description: 'Formal and business-like' },
      { value: 'exciting', label: 'Exciting', icon: '🎉', description: 'Energetic and enthusiastic' },
      { value: 'minimal', label: 'Minimal', icon: '✨', description: 'Clean and simple' },
      { value: 'playful', label: 'Playful', icon: '🎈', description: 'Fun and creative' }
    ],
    
    // Default tone
    DEFAULT_TONE: 'professional',
  },
  
  // UI Configuration
  UI: {
    // Animation settings
    ANIMATIONS: {
      ENABLED: true,
      DURATION: 0.6,
      STAGGER_DELAY: 0.1,
    },
    
    // Color scheme
    COLORS: {
      PRIMARY: '#3b82f6',
      SECONDARY: '#64748b',
      SUCCESS: '#22c55e',
      WARNING: '#f59e0b',
      ERROR: '#ef4444',
    },
    
    // Layout settings
    LAYOUT: {
      MAX_WIDTH: '1200px',
      CARD_PADDING: '24px',
      GRID_GAP: '24px',
    },
  },
  
  // Download Configuration
  DOWNLOAD: {
    // Available formats
    FORMATS: ['txt', 'md', 'html'],
    
    // Default format
    DEFAULT_FORMAT: 'txt',
    
    // File naming
    FILENAME_PREFIX: 'email-campaign',
    INCLUDE_TIMESTAMP: true,
  },
  
  // Feature Flags
  FEATURES: {
    // Enable/disable specific features
    REGENERATE_SECTIONS: true,
    COPY_TO_CLIPBOARD: true,
    DOWNLOAD_CAMPAIGN: true,
    CAMPAIGN_SUMMARY: true,
    BACK_TO_FORM: true,
    
    // Advanced features
    A_B_TESTING: false,
    CAMPAIGN_ANALYTICS: false,
    TEMPLATE_LIBRARY: false,
    COLLABORATION: false,
  },
  
  // Validation Rules
  VALIDATION: {
    // Required fields
    REQUIRED_FIELDS: ['productName', 'description', 'targetAudience', 'launchDate'],
    
    // Field validation rules
    RULES: {
      productName: {
        minLength: 3,
        maxLength: 100,
        pattern: /^[a-zA-Z0-9\s\-_&.()]+$/,
      },
      description: {
        minLength: 10,
        maxLength: 500,
      },
      targetAudience: {
        minLength: 5,
        maxLength: 200,
      },
      launchDate: {
        minDate: new Date().toISOString().split('T')[0], // Today or future
      },
    },
    
    // Error messages
    MESSAGES: {
      required: 'This field is required',
      minLength: (field, min) => `${field} must be at least ${min} characters`,
      maxLength: (field, max) => `${field} must be no more than ${max} characters`,
      pattern: (field) => `${field} contains invalid characters`,
      minDate: 'Launch date must be today or in the future',
    },
  },
  
  // Performance Settings
  PERFORMANCE: {
    // Debounce delay for form inputs (in milliseconds)
    INPUT_DEBOUNCE: 300,
    
    // Cache settings
    CACHE_ENABLED: true,
    CACHE_DURATION: 5 * 60 * 1000, // 5 minutes
    
    // Lazy loading
    LAZY_LOAD_ENABLED: true,
    LAZY_LOAD_THRESHOLD: 0.1,
  },
  
  // Analytics Configuration (for future implementation)
  ANALYTICS: {
    ENABLED: false,
    PROVIDER: 'google', // Options: 'google', 'mixpanel', 'amplitude'
    TRACKING_ID: process.env.REACT_APP_GA_TRACKING_ID,
    
    // Events to track
    EVENTS: {
      CAMPAIGN_GENERATED: 'campaign_generated',
      SECTION_REGENERATED: 'section_regenerated',
      CONTENT_COPIED: 'content_copied',
      CAMPAIGN_DOWNLOADED: 'campaign_downloaded',
      FORM_SUBMITTED: 'form_submitted',
    },
  },
};

// Helper function to get AI configuration for a specific provider
export const getAIConfig = (provider = CONFIG.AI.DEFAULT_PROVIDER) => {
  return CONFIG.AI[provider.toUpperCase()] || CONFIG.AI.OPENAI;
};

// Helper function to check if a feature is enabled
export const isFeatureEnabled = (feature) => {
  return CONFIG.FEATURES[feature] === true;
};

// Helper function to get validation rules for a field
export const getValidationRules = (field) => {
  return CONFIG.VALIDATION.RULES[field] || {};
};

// Export default configuration
export default CONFIG;
