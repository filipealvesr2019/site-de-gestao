import styles from "../ProductList/ProductList.module.css";
export default function Teste() {
  return (
    <>
      <>
        <div className={styles.DeleteModal}>
          <img  src="https://i.imgur.com/zpy7fcj.png" className={styles.deleteClose} />

          <div className={styles.DeleteModalContent}>
              <p>Tem certeza que deseja excluir este produto?</p>
              <div className={styles.DeleteModalButtons}>
                <button className={styles.buttonA}>Sim</button>
                <button className={styles.buttonB}>Não</button>
              </div>
     
          </div>
        </div>
      </>
    </>
  );
}
