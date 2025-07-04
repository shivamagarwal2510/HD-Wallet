import { useEffect, useState } from "react";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { Buffer } from "buffer";
import { HDNodeWallet, Wallet } from "ethers";

// Make Buffer globally available
if (typeof window !== "undefined") {
  (window as any).Buffer = Buffer;
}

interface Account {
  index: number;
  publicKey: string;
  privateKey: string;
}

export const useWallet = () => {
  const [seedPhrase, setSeedPhrase] = useState<string[]>([]);
  const [accounts, setAccounts] = useState<Account[]>(() => []);
  const [seed, setSeed] = useState<Buffer>();
  const [error, setError] = useState<string>("");

  const generateNewWallet = () => {
    try {
      setError("");
      setAccounts([]);
      const mnemonic = generateMnemonic(128);
      const seed = mnemonicToSeedSync(mnemonic);
      console.log("seed", seed);
      console.log("mnemonic", mnemonic);
      setSeedPhrase(mnemonic.split(" "));
      setSeed(seed);
    } catch (error) {
      console.error("error", error);
      setError("Error generating wallet");
    }
  };

  const importWallet = (seedPhrase: string) => {
    try {
      setError("");
      setAccounts([]);
      const seed = mnemonicToSeedSync(seedPhrase);
      setSeed(seed);
      setSeedPhrase(seedPhrase.split(" "));
    } catch (error) {
      console.error("error", error);
      setError("Error importing wallet! Please check your seed phrase.");
    }
  };

  const deleteAllWallets = () => {
    setSeedPhrase([]);
    setAccounts([]);
    setSeed(undefined);
  };

  const deriveEthereumWallet = (
    seed: Buffer,
    derivationPath: string
  ): Wallet => {
    const privateKey = deriveEthereumPrivateKey(seed, derivationPath);
    return new Wallet(privateKey);
  };

  const deriveEthereumPrivateKey = (
    seed: Buffer,
    derivationPath: string
  ): string => {
    console.log("[deriveEthereumPrivateKey] seed", seed);
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(derivationPath);
    return child.privateKey;
  };

  const generateAccount = (index: number) => {
    const derivationPath = `m/44'/60'/0'/0/${index}`;
    const wallet = deriveEthereumWallet(seed!, derivationPath);
    return {
      index,
      publicKey: wallet.address,
      privateKey: wallet.privateKey,
    };
  };

  const addAccount = () => {
    const newIndex = accounts.length + 1;
    const newAccount = generateAccount(newIndex);
    setAccounts((prev) => [...prev, newAccount]);
  };

  useEffect(() => {
    if (seed) {
      addAccount();
    }
  }, [seed]);

  return {
    seedPhrase,
    accounts,
    generateNewWallet,
    addAccount,
    seed,
    error,
    deleteAllWallets,
    importWallet,
  };
};
