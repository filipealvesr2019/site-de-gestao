import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import './globals.css';  // Certifique-se de que o arquivo de estilos globais está importado
import Script from "next/script";

// Certifique-se de envolver o ClerkProvider ao redor de todo o conteúdo
export default function RootLayout({ children }) {
  return (
    <ClerkProvider dynamic localization={ptBR} publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html>
      <head>
        {/* Adicionando o Google AdSense */}
        <Script
          strategy="lazyOnload"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          data-ad-client="ca-pub-4020379299787957"
          async
        />
      </head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
