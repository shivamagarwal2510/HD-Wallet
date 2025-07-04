# 🔐 Web3 HD Wallet

A modern, secure, and user-friendly **Hierarchical Deterministic (HD) Wallet** built with React, TypeScript, and Tailwind CSS. Generate, import, and manage multiple Ethereum accounts from a single seed phrase with an intuitive interface.

![HD Wallet Banner](https://img.shields.io/badge/Web3-HD%20Wallet-blue?style=for-the-badge&logo=ethereum&logoColor=white)

## ✨ Features

### 🔑 **Wallet Management**
- **Generate New Wallets**: Create cryptographically secure 12-word seed phrases
- **Import Existing Wallets**: Import wallets using existing seed phrases
- **Multiple Accounts**: Generate multiple Ethereum accounts from a single seed phrase
- **Secure Key Management**: View and hide private keys with toggle functionality

### 🔒 **Security Features**
- **BIP39 Compliance**: Standard mnemonic seed phrase generation
- **HD Wallet Support**: BIP44 derivation path implementation
- **Private Key Protection**: Hidden by default with manual reveal option
- **Secure Clipboard**: Robust copy-to-clipboard functionality

### 🎨 **User Experience**
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with smooth animations
- **Dark Theme**: Eye-friendly dark mode design
- **Interactive Elements**: Hover effects, loading states, and visual feedback
- **Confirmation Modals**: Safe deletion with confirmation dialogs

### 🚀 **Technical Features**
- **TypeScript**: Full type safety and better developer experience
- **Framer Motion**: Smooth animations and transitions
- **Tailwind CSS**: Utility-first styling with responsive design
- **Ethereum Integration**: Built with ethers.js for Web3 compatibility

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, TypeScript, Tailwind CSS |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Crypto** | ethers.js, bip39 |
| **Build Tool** | Vite |
| **Package Manager** | Yarn |

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **Yarn** package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/shivamagarwal2510/HD-Wallet.git
cd HD-Wallet
```

2. **Install dependencies**
```bash
yarn install
```

3. **Start the development server**
```bash
yarn dev
```

4. **Open your browser**
Navigate to `http://localhost:5173` to see the application.

### Build for Production

```bash
yarn build
```

The built files will be in the `dist` directory.

## 📱 Usage Guide

### 1. **Generate a New Wallet**
- Click "Generate New Wallet" to create a new 12-word seed phrase
- Your seed phrase will be displayed in a secure grid format
- Copy and store your seed phrase safely

### 2. **Import Existing Wallet**
- Enter your existing 12-word seed phrase in the input field
- Click "Generate New Wallet" to import your wallet
- Your accounts will be restored

### 3. **Manage Accounts**
- View your Ethereum accounts with public keys
- Click the eye icon to reveal/hide private keys
- Copy public or private keys using the copy button
- Add new accounts derived from the same seed phrase

### 4. **Security Best Practices**
- Always backup your seed phrase in a secure location
- Never share your private keys or seed phrase
- Use the "Delete All Wallets" feature carefully

## 🔧 Project Structure

```
src/
├── components/
│   ├── AccountCard.tsx      # Individual account display
│   ├── AccountsList.tsx     # List of all accounts
│   ├── ConfirmationModal.tsx # Confirmation dialogs
│   ├── Footer.tsx          # Application footer
│   ├── Header.tsx          # Application header
│   └── SeedPhrase.tsx      # Seed phrase management
├── hooks/
│   └── useWallet.ts        # Wallet management logic
├── utils/
│   └── clipboard.ts        # Clipboard utilities
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## 🔐 Security Considerations

⚠️ **Important Security Notes:**

- This is a **development/educational tool** - not recommended for production use with real funds
- Always verify the security of any wallet software before using with real cryptocurrency
- Store seed phrases securely and never share them
- Private keys are handled client-side and never transmitted to servers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Shivam Agarwal**

- 🐦 Twitter: [@itshivam25101](https://x.com/itshivam25101)
- 💼 LinkedIn: [Shivam Agarwal](https://www.linkedin.com/in/shivam-agarwal-b88a04201/)
- 📧 Email: [shivgun03@gmail.com](mailto:shivgun03@gmail.com)
- 🔗 GitHub: [@shivamagarwal2510](https://github.com/shivamagarwal2510)

## 🌟 Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub!

---

<div align="center">
  <p>Made with ❤️ by Shivam Agarwal</p>
  <p>
    <a href="https://github.com/shivamagarwal2510/HD-Wallet">
      <img src="https://img.shields.io/github/stars/shivamagarwal2510/HD-Wallet?style=social" alt="GitHub stars">
    </a>
    <a href="https://github.com/shivamagarwal2510/HD-Wallet/fork">
      <img src="https://img.shields.io/github/forks/shivamagarwal2510/HD-Wallet?style=social" alt="GitHub forks">
    </a>
  </p>
</div>
