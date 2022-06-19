import { Box, Center, Container, HStack, Text, VStack } from 'native-base';
import Skeleton from 'react-native-skeleton-content';

import { useCardsContext } from '../../state/cards';
import { CardFrontBasic } from '../card/card-front-basic';

interface IHandProps {
  hand: string[];
}

export const Hand = ({ hand }: IHandProps) => {
  const { cardsById, loading: loadingCardData } = useCardsContext();

  const CardsInHand = loadingCardData
    ? null
    : hand.map(cardId => {
        const card = cardsById[cardId];
        return <CardFrontBasic key={cardId} card={card} rotated />;
      });

  return (
    <Skeleton isLoading={loadingCardData}>
      <Center>
        <HStack>{CardsInHand}</HStack>
      </Center>
    </Skeleton>
  );
};
