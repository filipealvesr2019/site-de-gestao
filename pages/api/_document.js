import Head from "next/head";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          {/* Outras tags do Head */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4020379299787957"
          ></script>
        </Head>
      {/* Configuração do Iubenda */}
      <Script
        id="iubenda-configuration"
        strategy="beforeInteractive"
      >
        {`
          var _iub = _iub || [];
          _iub.csConfiguration = {
            cookiePolicyId: 16590111, // Substitua pelo ID da sua política
            siteId: 3872053,            // Substitua pelo ID do site
            lang: "pt",                      // Idioma do banner
            banner: {
              position: "bottom",
              textColor: "#FFFFFF",
              backgroundColor: "#000000",
              acceptButtonDisplay: true,
              acceptButtonColor: "#4CAF50",
              acceptButtonTextColor: "#FFFFFF",
            },
          };
        `}
      </Script>

      {/* Script principal do Iubenda */}
      <Script
        src="https://cdn.iubenda.com/cs/ccpa/stub.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://cdn.iubenda.com/iubenda.js"
        strategy="lazyOnload"
      />

      <Component {...pageProps} />
    </>
  );
}
