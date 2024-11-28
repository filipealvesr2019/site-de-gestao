"use client";

import styles from "./Login.module.css";
import { useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";

export default function Login() {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <>
      <div className={styles.login}>
        <p>LOGO</p>

   
      <SignedOut>
     
        <Link href={"/login"}>
          <button className={styles.button}>Entrar</button>
        </Link>
   
      </SignedOut>
      <SignedIn>
        {/* Exibe o botão do usuário autenticado */}
        <UserButton />
      </SignedIn>

      

      {/* Exibe uma mensagem ou redireciona para login quando o usuário não estiver autenticado */}
      <SignedOut>
      </SignedOut>
      </div>
    </>
  );
}
