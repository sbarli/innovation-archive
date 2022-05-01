import { Box, Center, Container, HStack, Text, VStack } from 'native-base';
import Skeleton from 'react-native-skeleton-content';

import { useCardsContext } from '../../state/cards';

interface IHandProps {
  hand: string[];
}

export const Hand = ({ hand }: IHandProps) => {
  const { cardsById, loading: loadingCardData } = useCardsContext();
  console.log('loadingCardData: ', loadingCardData);

  const CardsInHand = loadingCardData
    ? null
    : hand.map(cardId => {
        const card = cardsById[cardId];
        return (
          <Box
            key={cardId}
            borderRadius="lg"
            borderColor="black"
            borderWidth="1"
            alignItems="center"
            justifyContent="center"
            // paddingX="1"
            // paddingY="1"
          >
            <VStack alignItems="center" justifyContent="space-between" flex={1}>
              <Box
                borderRadius="full"
                borderColor="black"
                borderWidth="1"
                h="8"
                w="8"
                alignItems="center"
                justifyContent="center"
              >
                <Text>{card.age}</Text>
              </Box>
              <Box>
                <Text style={{ transform: [{ rotate: '270deg' }], letterSpacing: 1.5 }}>
                  {card.name.toUpperCase()}
                </Text>
              </Box>
            </VStack>
          </Box>
        );
      });

  return (
    <Skeleton isLoading={loadingCardData}>
      <Center>
        <Container>{CardsInHand}</Container>
      </Center>
    </Skeleton>
  );
};
