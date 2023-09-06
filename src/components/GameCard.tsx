import { Card, Image, CardBody, Heading, HStack } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
import PlatformIconList from './PlatformIconList';
import { Game } from '../hooks/useGames';
import CriticScore from './CriticScore';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width='225px' borderRadius={10} overflow='hidden'>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
