import { useState } from 'react';

const useClipboard = (text) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true); 
      })
      .catch(error => {
        console.error('Failed to copy:', error);
      });
  };

  return { copied, copyToClipboard };
};

export default useClipboard;