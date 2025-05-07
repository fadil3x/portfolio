import React from "react";
import styles from "./Hero.module.css";
import me from "../../assets/hero/me2.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.section className={styles.container}initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}>
      <motion.div className={styles.leftColumn} initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    viewport={{ once: true }}>
        <motion.img src={me} alt="Image of Falilou" className={styles.heroImage} 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }} />
      </motion.div>
      <div className={styles.rightColumn}>
        <h1 className={styles.title}>Hi, my name is Falilou</h1>
        <p className={styles.description}>
        I am a fourth-year Computer Science student minoring in English Literature. 
        After completing my undergraduate studies, I hope to specialize in Machine Learning,
        specifically Computer Vision and Data Mining, 
        because they relate to two of my interests: Graphic Design and Statistics. 
        Growing up, I was not sure what I wanted to be, but my curiosity toward 
        technology led me to the field I am in today. I feel very fortunate, 
        and I hope to contribute to development that truly matters.
        </p>
        <div className={styles.skills}>
          <h3>Skills & Background</h3>
          <ul>
            <li>Programming Languages: C, Assembly, Python, Java.</li>
            <li>Spoken Languages: French (Fluent), English (Fluent), Spanish (Professional Working Proficiency), Wolof (Fluent).</li>
            <li>7+ years of experience in photoediting & video editing (Photoshop & Filmora).</li>
          </ul>
        </div>
        <a href="mailto:mouhamadouniang17@gmail.com" className={styles.contact}>
          Contact Me
        </a>
      </div>
    </motion.section>
  );
};
