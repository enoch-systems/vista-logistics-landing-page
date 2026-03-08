'use client';

import { useEffect } from 'react';

type FBQ = {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  push?: (...args: unknown[]) => void;
  loaded?: boolean;
  version?: string;
  (...args: unknown[]): void;
};

declare global {
  interface Window {
    fbq?: FBQ;
    _fbq?: FBQ;
  }
}

export default function MetaPixel() {
  useEffect(() => {
    // Initialize Meta Pixel
    if (typeof window === 'undefined') return;
    if (window.fbq) return;

    // Create the fbq function
    const fbq = ((...args: unknown[]) => {
      if (fbq.callMethod) {
        fbq.callMethod(...args);
      } else {
        fbq.queue?.push(args);
      }
    }) as FBQ;

    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = '2.0';
    fbq.queue = [];

    window.fbq = fbq;
    if (!window._fbq) window._fbq = fbq;

    // Create and append the script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    // Initialize with pixel ID
    if (window.fbq) {
      window.fbq('init', '1882671399087219');
      window.fbq('track', 'PageView');
    }
  }, []);

  return null;
}
