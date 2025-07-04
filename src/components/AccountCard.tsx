import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Eye, EyeOff, Check, X } from "lucide-react";
import { copyToClipboard } from "../utils/clipboard";

interface Account {
  index: number;
  publicKey: string;
  privateKey: string;
}

interface AccountCardProps {
  account: Account;
  delay?: number;
}

const AccountCard: React.FC<AccountCardProps> = ({ account, delay = 0 }) => {
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (text: string, type: string) => {
    try {
      const success = await copyToClipboard(text);

      if (success) {
        setCopiedKey(type);
        setTimeout(() => setCopiedKey(null), 2000);
      } else {
        setCopiedKey("error");
        setTimeout(() => setCopiedKey(null), 2000);
      }
    } catch (error) {
      console.error("Copy failed:", error);
      setCopiedKey("error");
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const truncateKey = (key: string) => {
    return `${key.slice(0, 6)}...${key.slice(-4)}`;
  };

  const getCopyIcon = (keyType: string) => {
    if (copiedKey === keyType) {
      return <Check size={16} className="text-green-400" />;
    }
    if (copiedKey === "error") {
      return <X size={16} className="text-red-400" />;
    }
    return <Copy size={16} className="text-gray-400 hover:text-white" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-gray-800 border border-gray-600 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-white text-lg">
          Account #{account.index}
        </h3>
        <div className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">
          Active
        </div>
      </div>

      {/* Public Key */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-3">
          Public Key
        </label>
        <div className="relative">
          <div className="bg-gray-900 px-4 py-3 pr-12 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors">
            <code className="text-sm font-mono text-gray-100 block sm:hidden">
              {truncateKey(account.publicKey)}
            </code>
            <code className="text-sm font-mono text-gray-100 hidden sm:block overflow-x-auto">
              {account.publicKey}
            </code>
            <motion.button
              onClick={() => handleCopy(account.publicKey, "public")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-3 top-1 p-2 rounded-md hover:bg-gray-700 transition-colors"
              title="Copy public key"
            >
              {getCopyIcon("public")}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Private Key */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="block text-sm font-medium text-gray-300">
            Private Key
          </label>
          <motion.button
            onClick={() => setShowPrivateKey(!showPrivateKey)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
            title={showPrivateKey ? "Hide private key" : "Show private key"}
          >
            {showPrivateKey ? <EyeOff size={16} /> : <Eye size={16} />}
          </motion.button>
        </div>
        <div className="relative">
          <div className="bg-gray-900 px-4 py-3 pr-12 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors">
            {showPrivateKey ? (
              <>
                <code className="text-sm font-mono text-gray-100 block sm:hidden">
                  {truncateKey(account.privateKey)}
                </code>
                <input
                  type="text"
                  className="text-sm font-mono text-gray-100 hidden sm:block overflow-x-auto bg-inherit focus:outline-none w-full"
                  value={account.privateKey}
                  readOnly
                />
              </>
            ) : (
              <input
                type="password"
                className="text-sm font-mono text-gray-100 hidden sm:block overflow-x-auto bg-inherit focus:outline-none w-full"
                value={account.privateKey}
                readOnly
              />
            )}
          </div>
          <motion.button
            onClick={() => handleCopy(account.privateKey, "private")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-3 top-1 p-2 rounded-md hover:bg-gray-700 transition-colors"
            title="Copy private key"
          >
            {getCopyIcon("private")}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default AccountCard;
