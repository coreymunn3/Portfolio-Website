import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const SlideIntoView = ({ children, direction, pctVisibleThreshold }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: pctVisibleThreshold ? pctVisibleThreshold : 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // calculate starting positions
  let xStart, yStart;
  switch (direction) {
    case 'fromTop':
      xStart = 0;
      yStart = -25;
      break;
    case 'fromBottom':
      xStart = 0;
      yStart = 25;
      break;
    case 'fromLeft':
      xStart = -25;
      yStart = 0;
      break;
    case 'fromRight':
      xStart = 25;
      yStart = 0;
      break;
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: yStart,
      x: xStart,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      ref={ref}
      animate={controls}
      initial='hidden'
    >
      {children}
    </motion.div>
  );
};

export default SlideIntoView;
