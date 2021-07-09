import { Stack, HStack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const StagList = motion(Stack);
const StagListItem = motion(HStack);

const StaggeredList = ({
  items,
  staggerDuration,
  childDuration,
  delay,
  ...otherProps
}) => {
  const listVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: delay ? delay : 0,
        when: 'beforeChildren',
        staggerChildren: staggerDuration,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: childDuration,
      },
    },
  };
  return (
    <StagList
      {...otherProps}
      variants={listVariants}
      initial='hidden'
      animate='visible'
    >
      {items.map((item) => (
        <StagListItem variants={listItemVariants} key={item.text}>
          {item?.icon}
          <Text>{item.text}</Text>
        </StagListItem>
      ))}
    </StagList>
  );
};

export default StaggeredList;
