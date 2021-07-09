import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const SlideIntoView = ({
  children,
  direction,
  delay,
  duration,
  pctVisibleThreshold,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: pctVisibleThreshold ? pctVisibleThreshold : 0.35,
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
      yStart = -20;
      break;
    case 'fromBottom':
      xStart = 0;
      yStart = 20;
      break;
    case 'fromLeft':
      xStart = -20;
      yStart = 0;
      break;
    case 'fromRight':
      xStart = 20;
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
        delay: delay ? delay : 0.3,
        duration: duration ? duration : 0.3,
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
