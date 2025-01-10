"use client";
import { useAuth } from '@clerk/nextjs';
import ProductList from "../ProductList/ProductList";
import LandinPage from "../LandinPage/LandinPage";

export default function UserAuth() {
    const { isSignedIn } = useAuth();
  

  return (
    <div>
      {isSignedIn ? <dashboard /> : <LandinPage />}
    </div>
  );
}
