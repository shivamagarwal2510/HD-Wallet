import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import SeedPhrase from './components/SeedPhrase';
import AccountsList from './components/AccountsList';
import { useWallet } from './hooks/useWallet';

function App() {
  const { seedPhrase, accounts, generateNewWallet, addAccount, error, deleteAllWallets, importWallet } = useWallet();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="max-w-6xl mx-auto px-4 mb-4"
        >
          <div className="bg-red-900/50 border border-red-700 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-red-200 font-medium">{error}</p>
            </div>
          </div>
        </motion.div>
      )}
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 py-8 space-y-8"
      >
        <SeedPhrase 
          seedPhrase={seedPhrase}
          onGenerateNew={generateNewWallet}
          onDeleteAllWallets={deleteAllWallets}
          onImportWallet={importWallet}
        />
        
        <AccountsList 
          accounts={accounts}
          onAddAccount={addAccount}
          seedPhrase={seedPhrase}
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
