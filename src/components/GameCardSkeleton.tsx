import { Card, Skeleton, CardBody, SkeletonText } from '@chakra-ui/react';
import {} from 'react';

const GameCardSkeleton = () => {
  return (
    <Card width='225px' borderRadius={10} overflow='hidden'>
      <Skeleton height='200px' />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
