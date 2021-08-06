import { Skeleton } from '@chakra-ui/skeleton';
import { Image } from '@chakra-ui/image';
import { useState } from 'react';

const SkeletonLoadingImage = ({ src, alt, ...otherProps }) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => setIsLoading(false);
  return (
    <Skeleton isLoaded={!isLoading}>
      <Image {...otherProps} src={src} alt={alt} onLoad={handleImageLoad} />
    </Skeleton>
  );
};

export default SkeletonLoadingImage;
