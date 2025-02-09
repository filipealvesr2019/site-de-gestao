import Script from "next/script";
import React from "react";

const Adsense = () => {
  return (
    <div>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4020379299787957"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default Adsense;
