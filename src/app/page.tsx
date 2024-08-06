'use client'
import styles from './page.module.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phrases: string[] = [
  "Lorem Ipsum is simply dummy text",
  "Lorem Ipsum is simply dummy text",
  "Lorem Ipsum is simply dummy text",
  "Lorem Ipsum is simply dummy text",
];

const animation = {
  initial: { y: "100%" },
  enter: (i: number) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.075 * i,
    },
  }),
};

const MaskText: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.body}>
      {phrases.map((phrase, index) => (
        <div key={index} className={styles.lineMask}>
          <motion.p
            custom={index}
            variants={animation}
            initial="initial"
            animate={inView ? "enter" : ""}
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <MaskText />
      <MaskText />
      
    </div>
  );
};

export default Home;
export { MaskText };
