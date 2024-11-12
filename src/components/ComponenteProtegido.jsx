"use client";
import { useAuth, RedirectToSignIn } from '@clerk/nextjs';

export default function ComponenteProtegido() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <div>


    </div>
  );
}
