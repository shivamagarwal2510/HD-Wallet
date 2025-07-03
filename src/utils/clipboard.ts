/**
 * Utility function to copy text to clipboard with robust fallback support
 * @param text - The text to copy
 * @returns Promise<boolean> - True if successful, false otherwise
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    // Method 1: Try modern Clipboard API (works in secure contexts)
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (error) {
    // If modern API fails, fall through to legacy method
    console.warn('Modern clipboard API failed:', error);
  }

  try {
    // Method 2: Legacy fallback using document.execCommand
    const textarea = document.createElement('textarea');
    textarea.value = text;
    
    // Make textarea invisible but functional
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    textarea.style.top = '-999999px';
    textarea.style.opacity = '0';
    textarea.style.pointerEvents = 'none';
    textarea.style.tabIndex = '-1';
    textarea.setAttribute('readonly', '');
    
    document.body.appendChild(textarea);
    
    // Focus and select text
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    
    // Execute copy command
    const successful = document.execCommand('copy');
    
    // Clean up
    document.body.removeChild(textarea);
    
    return successful;
  } catch (error) {
    console.error('All clipboard methods failed:', error);
    return false;
  }
};

/**
 * Check if clipboard functionality is available
 * @returns boolean - True if clipboard is available
 */
export const isClipboardAvailable = (): boolean => {
  return !!(navigator.clipboard || document.execCommand);
};
