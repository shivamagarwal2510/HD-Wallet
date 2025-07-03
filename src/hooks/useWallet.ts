import { useState } from 'react';

interface Account {
  index: number;
  publicKey: string;
  privateKey: string;
}

const generateMockSeedPhrase = (): string[] => {
  const words = [
    'abandon', 'ability', 'able', 'about', 'above', 'absent',
    'absorb', 'abstract', 'absurd', 'abuse', 'access', 'accident',
    'account', 'accuse', 'achieve', 'acid', 'acoustic', 'acquire',
    'across', 'act', 'action', 'actor', 'actress', 'actual'
  ];
  
  return Array.from({ length: 12 }, () => 
    words[Math.floor(Math.random() * words.length)]
  );
};

const generateMockAccount = (index: number): Account => {
  const publicKey = `0x${Math.random().toString(16).substr(2, 40)}`;
  const privateKey = `0x${Math.random().toString(16).substr(2, 64)}`;
  
  return {
    index,
    publicKey,
    privateKey
  };
};

export const useWallet = () => {
  const [seedPhrase, setSeedPhrase] = useState<string[]>(() => generateMockSeedPhrase());
  const [accounts, setAccounts] = useState<Account[]>(() => [
    generateMockAccount(1),
    generateMockAccount(2),
    generateMockAccount(3)
  ]);

  const generateNewWallet = () => {
    setSeedPhrase(generateMockSeedPhrase());
    setAccounts([generateMockAccount(1)]);
  };

  const addAccount = () => {
    const newIndex = accounts.length + 1;
    const newAccount = generateMockAccount(newIndex);
    setAccounts(prev => [...prev, newAccount]);
  };

  return {
    seedPhrase,
    accounts,
    generateNewWallet,
    addAccount
  };
};
