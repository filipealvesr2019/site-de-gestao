"use client";
import { useAuth } from '@clerk/nextjs';
import ProductList from "../ProductList/ProductList";

import dynamic from 'next/dynamic';
const ClientOnlyComponent = dynamic(() => import('../LandinPage/LandinPage'), { ssr: false });

export default function UserAuth() {
    const { isSignedIn } = useAuth();
  

  return (
    <div>
      {isSignedIn ? <ProductList /> : <LandinPage />}
    </div>
  );
}
