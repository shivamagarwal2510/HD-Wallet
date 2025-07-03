import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Eye, EyeOff } from 'lucide-react';

interface SeedPhraseProps {
  seedPhrase: string[];
  onGenerateNew: () => void;
}

const SeedPhrase: React.FC<SeedPhraseProps> = ({ seedPhrase, onGenerateNew }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateNew = async () => {
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate generation
    onGenerateNew();
    setIsGenerating(false);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700 p-6 hover:shadow-blue-500/10 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
          <span>Seed Phrase</span>
        </h2>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          title={isVisible ? "Hide seed phrase" : "Show seed phrase"}
        >
          {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-4 bg-gray-900 rounded-lg border-2 border-dashed border-gray-600 mb-6">
              {seedPhrase.map((word, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center space-x-2 p-2 bg-gray-800 rounded-md border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <span className="text-xs font-medium text-gray-400 w-6">{index + 1}.</span>
                  <span className="text-sm font-mono text-gray-100">{word}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleGenerateNew}
        disabled={isGenerating}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-blue-500/25"
      >
        <RefreshCw className={`h-4 w-4 ${isGenerating ? 'animate-spin' : ''}`} />
        <span>{isGenerating ? 'Generating...' : 'Generate New Wallet'}</span>
      </motion.button>
    </motion.section>
  );
};

export default SeedPhrase;
