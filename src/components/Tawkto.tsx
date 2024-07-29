"use client"
import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: Date;
  }
}

const TawkToScript: React.FC = () => {
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/66a78f4532dca6db2cb70ca8/1i3v8fara';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode?.insertBefore(s1, s0);
  }, []);

  return null;
};

export default TawkToScript;
