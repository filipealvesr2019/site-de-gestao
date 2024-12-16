import React from "react";
import styles from "./FailureAlert.module.css";

const FailureAlert = ({ message, onClose }) => {
  return (
    <div className={styles.alert}>
      <img src="https://i.imgur.com/U7Psoq3.png" alt="icone de fracasso" />
      <p>{message}</p>
      <button onClick={onClose} className={styles.closeButton}>
        ✖
      </button>
    </div>
  );
};

export default FailureAlert;
