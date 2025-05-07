import React from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";


export const Contact = () => {
  return (
    <motion.section className={styles.container} id="contact"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
      <h2 className={styles.title}>Contact</h2>
      <p className={styles.text}>
        Feel free to reach out if you'd like to collaborate, ask about my work, or just say hello.
      </p>
      <a
        href="mailto:mouhamadouniang17@gmail.com"
        className={styles.emailButton}
      >
        Send Me an Email
      </a>
    </motion.section>
  );
};
