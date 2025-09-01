import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CAMPAIGN_TONES = [
  { value: 'professional', label: 'Professional', icon: '👔', description: 'Formal and business-like' },
  { value: 'exciting', label: 'Exciting', icon: '🎉', description: 'Energetic and enthusiastic' },
  { value: 'minimal', label: 'Minimal', icon: '✨', description: 'Clean and simple' },
  { value: 'playful', label: 'Playful', icon: '🎈', description: 'Fun and creative' }
];

const CampaignForm = ({ onGenerate, isGenerating }) => {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    targetAudience: '',
    launchDate: '',
    tone: 'professional'
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.productName.trim()) {
      newErrors.productName = 'Product name is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Product description is required';
    }
    if (!formData.targetAudience.trim()) {
      newErrors.targetAudience = 'Target audience is required';
    }
    if (!formData.launchDate) {
      newErrors.launchDate = 'Launch date is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onGenerate(formData);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      <div className="card p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Campaign Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name *
            </label>
            <input
              type="text"
              className={`input-field ${errors.productName ? 'border-red-500' : ''}`}
              placeholder="e.g., SmartHome Hub Pro"
              value={formData.productName}
              onChange={(e) => handleInputChange('productName', e.target.value)}
            />
            {errors.productName && (
              <p className="text-red-500 text-sm mt-1">{errors.productName}</p>
            )}
          </div>

          {/* Product Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Description *
            </label>
            <textarea
              className={`textarea-field ${errors.description ? 'border-red-500' : ''}`}
              rows="4"
              placeholder="Describe your product, its key features, and benefits..."
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          {/* Target Audience */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Audience *
            </label>
            <input
              type="text"
              className={`input-field ${errors.targetAudience ? 'border-red-500' : ''}`}
              placeholder="e.g., Tech-savvy homeowners, Small business owners"
              value={formData.targetAudience}
              onChange={(e) => handleInputChange('targetAudience', e.target.value)}
            />
            {errors.targetAudience && (
              <p className="text-red-500 text-sm mt-1">{errors.targetAudience}</p>
            )}
          </div>

          {/* Launch Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Launch Date *
            </label>
            <input
              type="date"
              className={`input-field ${errors.launchDate ? 'border-red-500' : ''}`}
              value={formData.launchDate}
              onChange={(e) => handleInputChange('launchDate', e.target.value)}
            />
            {errors.launchDate && (
              <p className="text-red-500 text-sm mt-1">{errors.launchDate}</p>
            )}
          </div>

          {/* Campaign Tone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Campaign Tone *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CAMPAIGN_TONES.map((tone) => (
                <motion.div
                  key={tone.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all duration-200 ${
                    formData.tone === tone.value
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleInputChange('tone', tone.value)}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{tone.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-800">{tone.label}</div>
                      <div className="text-sm text-gray-600">{tone.description}</div>
                    </div>
                  </div>
                  {formData.tone === tone.value && (
                    <div className="absolute top-2 right-2 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <div className="pt-6">
            <motion.button
              type="submit"
              disabled={isGenerating}
              whileHover={{ scale: isGenerating ? 1 : 1.02 }}
              whileTap={{ scale: isGenerating ? 1 : 0.98 }}
              className={`w-full btn-primary text-lg py-4 ${
                isGenerating ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isGenerating ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Generating Campaign...</span>
                </div>
              ) : (
                <span>🚀 Generate Email Campaign</span>
              )}
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default CampaignForm;
