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
        <p>LOGO</p>

        <SignedOut>
          <div>
            <Link href={"/login"}>
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
