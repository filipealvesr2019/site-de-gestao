"use client";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import ComponenteProtegido from "@/components/ComponenteProtegido";
export default function Login() {
  return (
    <>
      <ClerkProvider dynamic localization={ptBR}>
        <SignedOut>
          {/* Exibe o botão de login somente quando o usuário não estiver autenticado */}
          <SignInButton />
        </SignedOut>
        <SignedIn>
          {/* Exibe o botão do usuário autenticado */}
          <UserButton />
        </SignedIn>

        {/* Componente protegido que só será exibido se o usuário estiver autenticado */}
        <SignedIn>
          <ComponenteProtegido />
        </SignedIn>

        {/* Exibe uma mensagem ou redireciona para login quando o usuário não estiver autenticado */}
        <SignedOut>
          <p>Por favor, faça login para acessar o conteúdo.</p>
        </SignedOut>
      </ClerkProvider>
    </>
  );
}
