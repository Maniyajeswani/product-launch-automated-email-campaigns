import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EmailPreviewCard = ({ 
  title, 
  subtitle, 
  content, 
  onRegenerate, 
  onCopy, 
  copiedSection, 
  sectionKey, 
  icon, 
  color, 
  isFullWidth = false 
}) => {
  const [isRegenerating, setIsRegenerating] = useState(false);

  const colorClasses = {
    blue: 'border-blue-200 bg-blue-50',
    green: 'border-green-200 bg-green-50',
    purple: 'border-purple-200 bg-purple-50',
    orange: 'border-orange-200 bg-orange-50'
  };

  const handleRegenerate = async () => {
    setIsRegenerating(true);
    try {
      await onRegenerate();
    } finally {
      setIsRegenerating(false);
    }
  };

  const handleCopy = (text) => {
    onCopy(text, sectionKey);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`card p-6 ${isFullWidth ? 'lg:col-span-2' : ''}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`text-2xl p-2 rounded-lg ${colorClasses[color]}`}>
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">{subtitle}</p>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRegenerate}
          disabled={isRegenerating}
          className={`btn-secondary text-sm ${
            isRegenerating ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {isRegenerating ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
              <span>Generating...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Regenerate</span>
            </div>
          )}
        </motion.button>
      </div>

      {/* Content */}
      <div className="space-y-3">
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  {sectionKey === 'emailBody' ? (
                    <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed">
                      {item}
                    </pre>
                  ) : (
                    <p className="text-gray-700 leading-relaxed">
                      {item}
                    </p>
                  )}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleCopy(item)}
                  className={`opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-lg ${
                    copiedSection === sectionKey ? 'bg-success-100 text-success-600' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                  }`}
                  title="Copy to clipboard"
                >
                  {copiedSection === sectionKey ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </motion.button>
              </div>
              
              {sectionKey !== 'emailBody' && (
                <div className="mt-2 text-xs text-gray-500">
                  Option {index + 1} of {content.length}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>
            {content.length} {sectionKey === 'emailBody' ? 'version' : 'options'} generated
          </span>
          <span className="text-xs">
            Click any option to copy to clipboard
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default EmailPreviewCard;
