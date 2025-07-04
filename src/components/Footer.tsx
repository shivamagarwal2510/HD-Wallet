import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'X (Twitter)',
      url: 'https://x.com/itshivam25101',
      icon: Twitter,
      color: 'hover:text-blue-400',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shivam-agarwal-b88a04201/',
      icon: Linkedin,
      color: 'hover:text-blue-600',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/shivamagarwal2510/',
      icon: Github,
      color: 'hover:text-purple-400',
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="bg-gray-800 border-t border-gray-700 mt-8"
    >
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left side - Social links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 bg-gray-700 rounded-lg text-gray-400 ${link.color} transition-all duration-300 hover:bg-gray-600`}
                title={link.name}
              >
                <link.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>

          {/* Center - Made with love */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center space-x-2 text-gray-300"
          >
            <span className="text-sm font-medium">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.div>
            <span className="text-sm font-medium">by</span>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Shivam Agarwal
            </span>
          </motion.div>

          {/* Right side - Project link and Contact */}
          <div className="flex items-center space-x-3">
            <motion.a
              href="mailto:shivgun03@gmail.com"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg border border-green-500 hover:border-green-400 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-green-500/25"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
            </motion.a>
            
            <motion.a
              href="https://github.com/shivamagarwal2510/HD-Wallet"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-gray-300 hover:text-white rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 text-sm font-medium"
            >
              <Github className="h-4 w-4" />
              <span>Source Code</span>
            </motion.a>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center space-y-4">
          {/* Made with love text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center space-x-2 text-gray-300"
          >
            <span className="text-sm font-medium">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.div>
            <span className="text-sm font-medium">by</span>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Shivam Agarwal
            </span>
          </motion.div>

          {/* Social media links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 bg-gray-700 rounded-lg text-gray-400 ${link.color} transition-all duration-300 hover:bg-gray-600`}
                title={link.name}
              >
                <link.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col space-y-3 w-full max-w-xs">
            <motion.a
              href="mailto:shivgun03@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg border border-green-500 hover:border-green-400 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-green-500/25"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
            </motion.a>

            <motion.a
              href="https://github.com/shivamagarwal2510/HD-Wallet"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-gray-300 hover:text-white rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 text-sm font-medium"
            >
              <Github className="h-4 w-4" />
              <span>View Source Code</span>
            </motion.a>
          </div>
        </div>

        {/* Copyright - Always at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="text-center mt-4 pt-4 border-t border-gray-700"
        >
          <p className="text-xs text-gray-500">
            © 2025 HD Wallet. Open source project for educational purposes.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
