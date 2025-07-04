import { generateMnemonic, mnemonicToSeedSync } from "bip39";

const mnemonic = generateMnemonic(256);
const seed = mnemonicToSeedSync(mnemonic);

console.log(seed);
console.log(mnemonic);