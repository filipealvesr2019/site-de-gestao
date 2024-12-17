import { ClerkProvider } from '@clerk/nextjs';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (

   <ClerkProvider>
      <Component {...pageProps} />
      <Head>
      <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="abdf27a8-c0f2-4d99-8b92-e156e4821038" data-blockingmode="auto" type="text/javascript"></script>
      </Head>
    </ClerkProvider>

 
  );
}

export default MyApp;
