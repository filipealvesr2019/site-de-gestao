import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

// Certifique-se de envolver o ClerkProvider ao redor de todo o conteúdo
export default function RootLayout({ children }) {
  return (
    <ClerkProvider dynamic>

          <html lang="en">
        <body>
        
          {children}
        </body>
      </html>


    </ClerkProvider>
  );
}
