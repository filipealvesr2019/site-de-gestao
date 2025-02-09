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
import Adsense from "../components/Adsense/Adsense";

// Certifique-se de envolver o ClerkProvider ao redor de todo o conteúdo
export default function RootLayout({ children }) {
  return (
    <ClerkProvider dynamic localization={ptBR} publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html>
        <head>
          <Adsense/>
        </head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
