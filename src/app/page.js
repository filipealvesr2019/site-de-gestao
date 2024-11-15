
import styles from "./page.module.css";
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
