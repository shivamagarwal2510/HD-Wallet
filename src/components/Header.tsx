import React from 'react';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 border-b border-gray-700 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center space-x-3">
          <motion.div
            initial={{ rotate: -180 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Wallet className="h-8 w-8 text-blue-400" />
          </motion.div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Web3 HD Wallet
          </h1>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
