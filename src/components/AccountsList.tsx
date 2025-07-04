import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import AccountCard from "./AccountCard";

interface Account {
  index: number;
  publicKey: string;
  privateKey: string;
}

interface AccountsListProps {
  accounts: Account[];
  onAddAccount: () => void;
  seedPhrase: string[];
}

const AccountsList: React.FC<AccountsListProps> = ({
  accounts,
  onAddAccount,
  seedPhrase,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700 p-6 hover:shadow-blue-500/10 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Accounts</h2>
        {seedPhrase.length > 0 && (
          <motion.button
            onClick={onAddAccount}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-green-500/25"
          >
            <Plus size={16} />
            <span>Add Account</span>
          </motion.button>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {accounts.map((account, index) => (
          <AccountCard
            key={account.index}
            account={account}
            delay={index * 0.1}
          />
        ))}
      </div>

      {accounts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-gray-400"
        >
          <p className="text-lg mb-2">No accounts generated yet</p>
          <p className="text-sm">
            Generate a new wallet to create your first account
          </p>
        </motion.div>
      )}
    </motion.section>
  );
};

export default AccountsList;
