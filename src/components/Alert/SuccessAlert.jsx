import React from "react";
import styles from "./SuccessAlert.module.css";

const SuccessAlert = ({ message, onClose }) => {
  return (
    <div className={styles.alert}>
      <img src="https://i.imgur.com/T4vWc4o.png" alt="" />
      <p>{message}</p>
      <button onClick={onClose} className={styles.closeButton}>
        ✖
      </button>
    </div>
  );
};

export default SuccessAlert;
