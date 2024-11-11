"use client";
import { useAuth, RedirectToSignIn } from '@clerk/nextjs';

export default function ComponenteProtegido() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <div>
      <h1>Bem-vindo! Você está autenticado.</h1>
      <p>Este é o conteúdo protegido que apenas usuários autenticados podem ver.</p>
    </div>
  );
}
