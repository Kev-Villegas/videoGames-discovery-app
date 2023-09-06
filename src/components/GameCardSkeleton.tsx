import { Card, Skeleton, CardBody, SkeletonText } from '@chakra-ui/react';
import {} from 'react';

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height='200px' />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
