import React from "react";
import styles from "./Projects.module.css";
import demoVideo from "../../assets/projects/Demo.mp4";
import design1 from "../../assets/projects/Img2.png";
import design2 from "../../assets/projects/Img3.png";
import { motion } from "framer-motion";


export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      {/* Hepatocatcher */}
      <motion.div className={styles.projectBlock}
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6 }}
       viewport={{ once: true }}>
        <h3 className={styles.subtitle}>Hepatocatcher — Histology Image Analysis</h3>
        <div className={styles.projectContent}>
          <video controls className={styles.video}>
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.text}>
            <p>
            My first Computer Vision project is a smart filter for histology images called Hepatocatcher which I designed for one of my finals. As the name suggests, it’s designed to identify and count hepatocytes — the cells found in the liver. This filter can help researchers track changes or patterns in liver tissue during medical studies.
            Using a mix of image segmentation, edge detection, and classification techniques, our code isolates hepatocytes from surrounding tissue, outlines their shapes, and confirms whether the cells are indeed hepatocytes or another type.
            The goal is to produce a filtered image with hepatocytes clearly highlighted, along with a second version where they’re marked in green and the total count is displayed.
            That said, the filter’s accuracy can drop with large variations in staining intensity or color. Overlapping cells and background noise also make segmentation and classification more difficult, which highlights some of the current limitations of our code.

            </p>
            <a
              className={styles.link}
              href="https://github.com/fadil3x/Hepatocatcher"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the code on GitHub
            </a>
          </div>
        </div>
      </motion.div>

      {/* Graphic Design */}
      <div className={styles.projectBlock}>
        <h3 className={styles.subtitle}>Graphic Design and Visual Editing</h3>
        <div className={styles.projectContent}>
          <div className={styles.text}>
            <p>
            I started doing graphic design when I was 17, during my second year of the IB. At first, it was just a way to create phone wallpapers and memes for my creativity hours — but over time, it became something deeper. It gave me a way to explore different parts of myself, and understand how the human eye responds to colors and shapes to create visually appealing images.
Years later, this creative path brought me closer to computer vision, as I began to study how both humans and machines perceive visuals. That theory helped explain many of the things I used to notice intuitively back in my teens.
These days, I mostly edit photos for logo designs or branding projects, but the same creativity has also shaped the video edits I’ve done throughout my university years.
            </p>
            <a
              className={styles.link}
              href="https://icedrive.net/s/kVSxTgviuS1X8xQizNYYRT2zQNRy"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my video edit portfolio on Dropbox
            </a>
          </div>
          <div className={styles.images}>
            <img src={design1} alt="Design sample 1" />
            <img src={design2} alt="Design sample 2" />
          </div>
        </div>
      </div>
    </section>
  );
};
