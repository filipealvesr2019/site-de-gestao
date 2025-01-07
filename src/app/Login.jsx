"use client";

import styles from "./Login.module.css";
import { useState } from "react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Login() {
  const [showSignIn, setShowSignIn] = useState(false);
  const { user } = useUser();

  return (
    <>
      <div className={styles.login}>
        <Link href={"https://www.gestaofinanceirapro.com.br/dashboard/free"}>
        
        <img src="https://i.imgur.com/33Qljej.png" alt="icone do gestão financeira pro" className={styles.login__img}/>
        </Link>

        <SignedOut>
          <div>
            <Link href={"/login/free"}>
              <button className={styles.button}>Entrar</button>
            </Link>
          </div>
        </SignedOut>

        {user ? (
          <>
            <UserButton />

            <SignedOut></SignedOut>
          </>
        ) : null}
      </div>
    </>
  );
}
