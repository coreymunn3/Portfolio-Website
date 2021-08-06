import { Stack, Box } from '@chakra-ui/layout';
import { motion } from 'framer-motion';

const StagGroup = motion(Stack);
const GroupItem = motion(Box);

const StaggeredGroup = ({
  items, // should be a list of components
  staggerInterval,
  childAnimationDuration,
  delay,
  children,
  ...otherProps
}) => {
  const groupVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: delay ? delay : 0,
        when: 'beforeChildren',
        staggerChildren: staggerInterval,
      },
    },
  };
  const groupItemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: childAnimationDuration,
      },
    },
  };

  return (
    <StagGroup
      {...otherProps}
      variants={groupVariants}
      initial='hidden'
      animate='visible'
    >
      {items.map((item, idx) => (
        <GroupItem variants={groupItemVariants} key={idx}>
          {item}
        </GroupItem>
      ))}
    </StagGroup>
  );
};

export default StaggeredGroup;
