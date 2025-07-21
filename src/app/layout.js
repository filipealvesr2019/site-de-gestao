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

// Certifique-se de envolver o ClerkProvider ao redor de todo o conteúdo
export default function RootLayout({ children }) {
  return (
    <ClerkProvider dynamic localization={ptBR} publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html>
         <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
