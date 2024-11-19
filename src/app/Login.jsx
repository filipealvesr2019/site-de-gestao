"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import UserAuth from "@/components/UserAuth/UserAuth";
export default function Login() {
  return (
    <>
      <SignedOut>
        <SignInButton>
          {/* Personalize o botão com classes ou estilos inline */}
          <button
            style={{
              backgroundColor: "#367af5",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              fontFamily:
                "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
              fontWeight: "500",
              width:"10%"
            }}
          >
            Entrar
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        {/* Exibe o botão do usuário autenticado */}
        <UserButton />
      </SignedIn>

      {/* Componente protegido que só será exibido se o usuário estiver autenticado */}
      <SignedIn>

      </SignedIn>

      {/* Exibe uma mensagem ou redireciona para login quando o usuário não estiver autenticado */}
      <SignedOut>
        <p>Por favor, faça login para acessar o conteúdo.</p>
      </SignedOut>
    </>
  );
}
