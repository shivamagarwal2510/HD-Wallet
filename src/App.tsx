import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import SeedPhrase from './components/SeedPhrase';
import AccountsList from './components/AccountsList';
import { useWallet } from './hooks/useWallet';

function App() {
  const { seedPhrase, accounts, generateNewWallet, addAccount } = useWallet();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 py-8 space-y-8"
      >
        <SeedPhrase 
          seedPhrase={seedPhrase}
          onGenerateNew={generateNewWallet}
        />
        
        <AccountsList 
          accounts={accounts}
          onAddAccount={addAccount}
        />
      </motion.main>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full opacity-5 blur-3xl"></div>
      </div>
    </div>
  );
}

export default App;
