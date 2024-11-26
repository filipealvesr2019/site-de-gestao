
import styles from "./page.module.css";
import Login from "./Login";
import UserAuth from "@/components/UserAuth/UserAuth";

export default function Home() {
  
  return (
    <div className={styles.container} >

<Login />
<UserAuth />

    </div>
  );
}
