import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CampaignForm from './components/CampaignForm';
import EmailCampaign from './components/EmailCampaign';
import { generateEmailCampaign } from './services/aiService';

function App() {
  const [campaign, setCampaign] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateCampaign = async (formData) => {
    setIsGenerating(true);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const generatedCampaign = await generateEmailCampaign(formData);
      setCampaign(generatedCampaign);
    } catch (error) {
      console.error('Error generating campaign:', error);
      // Fallback to mock data if AI service fails
      setCampaign({
        subjectLines: [
          `🚀 ${formData.productName} is Here! Don't Miss Out`,
          `Introducing ${formData.productName}: Your Next Big Thing`,
          `${formData.productName} Launch: Limited Time Access`
        ],
        previewText: [
          `Discover how ${formData.productName} can transform your ${formData.targetAudience} experience.`,
          `The wait is over! ${formData.productName} is finally launching.`,
          `Join the revolution with ${formData.productName} - launching soon!`
        ],
        emailBody: `Dear Valued Customer,

We're thrilled to announce the launch of ${formData.productName}!

${formData.description}

This revolutionary product is designed specifically for ${formData.targetAudience}, offering solutions that will transform your daily experience.

🎯 Key Features:
• Innovative design and functionality
• Tailored for ${formData.targetAudience}
• Launch date: ${formData.launchDate}

Don't miss out on this exclusive opportunity!`,
        callToActions: [
          'Shop Now - Limited Time Offer',
          'Learn More About the Features',
          'Reserve Your Spot Today',
          'Get Early Access - Join the Waitlist'
        ]
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRegenerateSection = async (section, formData) => {
    try {
      const newContent = await generateEmailCampaign(formData, section);
      setCampaign(prev => ({
        ...prev,
        [section]: newContent[section]
      }));
    } catch (error) {
      console.error('Error regenerating section:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🚀 Email Campaign Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create compelling product launch email campaigns with AI-powered content generation. 
            Perfect for marketers, entrepreneurs, and businesses launching new products.
          </p>
        </motion.header>

        <AnimatePresence mode="wait">
          {!campaign ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <CampaignForm 
                onGenerate={handleGenerateCampaign}
                isGenerating={isGenerating}
              />
            </motion.div>
          ) : (
            <motion.div
              key="campaign"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <EmailCampaign 
                campaign={campaign}
                onRegenerate={handleRegenerateSection}
                onBack={() => setCampaign(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
