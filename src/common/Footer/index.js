import React from "react";
import styles from "./styles.module.scss";
import moment from "moment";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        &copy; {moment().format("YYYY")} Ruslans Krims - All Rights Reserved
      </div>
    </div>
  );
};
