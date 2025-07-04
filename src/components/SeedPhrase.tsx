import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, Eye, EyeOff, Copy, Check } from "lucide-react";
import ConfirmationModal from "./ConfirmationModal";
import { copyToClipboard } from "../utils/clipboard";

interface SeedPhraseProps {
  seedPhrase: string[];
  onGenerateNew: () => void;
  onDeleteAllWallets: () => void;
  onImportWallet: (seedPhrase: string) => void;
}

const SeedPhrase: React.FC<SeedPhraseProps> = ({
  seedPhrase,
  onGenerateNew,
  onDeleteAllWallets,
  onImportWallet,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [seedPhraseInput, setSeedPhraseInput] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerateNew = async () => {
    setIsGenerating(true);
    if (seedPhraseInput.length > 0) {
      onImportWallet(seedPhraseInput);
    } else {
      onGenerateNew();
    }
    setIsGenerating(false);
  };

  const handleCopySeedPhrase = async () => {
    const seedPhraseText = seedPhrase.join(" ");
    const success = await copyToClipboard(seedPhraseText);

    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    }
  };

  useEffect(() => {
    if (seedPhrase.length > 0) {
      setIsVisible(true);
    }
    if (seedPhrase.length === 0) {
      setIsVisible(false);
    }
  }, [seedPhrase]);

  const handleDeleteAllWallets = () => {
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    onDeleteAllWallets();

    setDeleteModalOpen(false);
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
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
        {seedPhrase.length > 0 && (
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopySeedPhrase}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
              title="Copy seed phrase"
            >
              {isCopied ? (
                <Check size={20} className="text-green-500" />
              ) : (
                <Copy size={20} />
              )}
            </button>
            <button
              onClick={() => seedPhrase.length > 0 && setIsVisible(!isVisible)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
              title={isVisible ? "Hide seed phrase" : "Show seed phrase"}
            >
              {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
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
                  <span className="text-xs font-medium text-gray-400 w-6">
                    {index + 1}.
                  </span>
                  <span className="text-sm font-mono text-gray-100">
                    {word}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {seedPhrase.length === 0 && (
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 w-full">
            <input
              type="text"
              value={seedPhraseInput}
              onChange={(e) => setSeedPhraseInput(e.target.value)}
              placeholder="Enter seed phrase or generate the new one"
              className="w-full p-4 m-2 rounded-md border border-gray-700 bg-gray-800 text-gray-100"
            />
          </div>
          <motion.button
            onClick={handleGenerateNew}
            disabled={isGenerating}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-blue-500/25"
          >
            <RefreshCw
              className={`h-4 w-6 ${isGenerating ? "animate-spin" : ""}`}
            />
            <span>
              {isGenerating ? "Generating..." : "Generate New Wallet"}
            </span>
          </motion.button>
        </div>
      )}

      {seedPhrase.length > 0 && (
        <motion.button
          onClick={handleDeleteAllWallets}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-red-500 hover:bg-red-600 disabled:from-gray-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-blue-500/25"
        >
          <span>Delete All Wallets</span>
        </motion.button>
      )}

      <ConfirmationModal
        isOpen={deleteModalOpen}
        title="Delete All Wallets"
        message="Are you sure you want to delete all wallets? This action cannot be undone and you will lose access to all your accounts unless you have backed up your seed phrase."
        confirmText="Delete All"
        cancelText="Cancel"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        variant="danger"
      />
    </motion.section>
  );
};

export default SeedPhrase;
