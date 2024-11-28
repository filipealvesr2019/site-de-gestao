"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import styles from './Login.module.css'
export default function Login() {
  return (
    <>
     <div  className={styles.login}>
<p>LOGO</p>

      <SignedOut>
        <SignInButton >
          {/* Personalize o botão com classes ou estilos inline */}
          <button
           className={styles.button}
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
      </SignedOut>
     </div>
    </>
  );
}
