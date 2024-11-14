import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { ptBR } from '@clerk/localizations'

// Certifique-se de envolver o ClerkProvider ao redor de todo o conteúdo
export default function RootLayout({ children }) {
  
  return (
    <ClerkProvider dynamic localization={ptBR}>

          <html lang="en">
        <body>
        
          {children}
        </body>
      </html>


    </ClerkProvider>
  );
}
