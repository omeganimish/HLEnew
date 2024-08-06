// app/ClientScript.js
"use client"; // Mark this component as client-side

import { useEffect } from "react";

const GA_ID = "G-P0NPNT0LZG"; // Replace with your Google Analytics ID

export default function GtagScript() {
  useEffect(() => {
    // Google Analytics
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", GA_ID);
    };

    // Optional: Clean up script on component unmount
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null; // No visible content needed
}
