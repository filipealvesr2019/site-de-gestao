
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import styles from "./page.module.css";
import ComponenteProtegido from "@/components/ComponenteProtegido";
import ProductList from "@/components/ProductList/ProductList";
import Login from "./Login";

export default function Home() {
  return (
    <div className={styles.page}>

        
<Login />
<ProductList />

    </div>
  );
}
