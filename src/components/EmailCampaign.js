import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EmailPreviewCard from './EmailPreviewCard';
import { downloadCampaign } from '../utils/downloadUtils';

const EmailCampaign = ({ campaign, onRegenerate, onBack }) => {
  const [copiedSection, setCopiedSection] = useState(null);

  const handleCopy = async (text, section) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedSection(section);
      setTimeout(() => setCopiedSection(null), 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  const handleDownload = () => {
    const campaignText = `
PRODUCT LAUNCH EMAIL CAMPAIGN

SUBJECT LINES:
${campaign.subjectLines.map((line, i) => `${i + 1}. ${line}`).join('\n')}

PREVIEW TEXT OPTIONS:
${campaign.previewText.map((text, i) => `${i + 1}. ${text}`).join('\n')}

EMAIL BODY:
${campaign.emailBody}

CALL-TO-ACTION SUGGESTIONS:
${campaign.callToActions.map((cta, i) => `${i + 1}. ${cta}`).join('\n')}
    `;
    
    downloadCampaign(campaignText, 'email-campaign.txt');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto"
    >
      {/* Header with Back Button */}
      <div className="flex items-center justify-between mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="btn-secondary flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Form</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
          className="btn-success flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Download Campaign</span>
        </motion.button>
      </div>

      {/* Campaign Sections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subject Lines */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <EmailPreviewCard
            title="📧 Subject Lines"
            subtitle="Choose the most compelling subject line for your campaign"
            content={campaign.subjectLines}
            onRegenerate={() => onRegenerate('subjectLines')}
            onCopy={handleCopy}
            copiedSection={copiedSection}
            sectionKey="subjectLines"
            icon="📧"
            color="blue"
          />
        </motion.div>

        {/* Preview Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <EmailPreviewCard
            title="👁️ Preview Text"
            subtitle="Short text that appears in email previews"
            content={campaign.previewText}
            onRegenerate={() => onRegenerate('previewText')}
            onCopy={handleCopy}
            copiedSection={copiedSection}
            sectionKey="previewText"
            icon="👁️"
            color="green"
          />
        </motion.div>

        {/* Email Body */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <EmailPreviewCard
            title="📝 Email Body"
            subtitle="The main content of your email campaign"
            content={[campaign.emailBody]}
            onRegenerate={() => onRegenerate('emailBody')}
            onCopy={handleCopy}
            copiedSection={copiedSection}
            sectionKey="emailBody"
            icon="📝"
            color="purple"
            isFullWidth={true}
          />
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <EmailPreviewCard
            title="🎯 Call to Actions"
            subtitle="Compelling action buttons for your campaign"
            content={campaign.callToActions}
            onRegenerate={() => onRegenerate('callToActions')}
            onCopy={handleCopy}
            copiedSection={copiedSection}
            sectionKey="callToActions"
            icon="🎯"
            color="orange"
          />
        </motion.div>

        {/* Campaign Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="card p-6 h-full">
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Campaign Ready!
              </h3>
              <p className="text-gray-600 mb-4">
                Your email campaign has been generated successfully. Use the regenerate buttons to get alternative versions of any section.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>✅ Subject lines optimized for open rates</div>
                <div>✅ Preview text for better engagement</div>
                <div>✅ Compelling email body content</div>
                <div>✅ Strategic call-to-action options</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 text-center"
      >
        <p className="text-gray-600 mb-4">
          Need to make changes? Go back to the form or regenerate specific sections.
        </p>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="btn-secondary"
          >
            ✏️ Edit Campaign Details
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="btn-success"
          >
            💾 Download Campaign
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EmailCampaign;
