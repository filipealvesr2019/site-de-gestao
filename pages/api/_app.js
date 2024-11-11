import { ClerkProvider } from '@clerk/nextjs';

import './globals.css';

function MyApp({ Component, pageProps }) {
  return (

   <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>

 
  );
}

export default MyApp;
