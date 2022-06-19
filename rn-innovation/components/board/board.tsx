import { Center, Container, HStack, VStack } from 'native-base';
import Skeleton from 'react-native-skeleton-content';

import { TBoard } from '../../types/board';
import { useCardsContext } from '../../state/cards';
import { CardFrontBasic } from '../card/card-front-basic';
import { Colors } from '../../enums/cards';

interface IBoardProps {
  board: TBoard;
}

export const Board = ({ board }: IBoardProps) => {
  const { cardsById, loading: loadingCardData } = useCardsContext();

  const boardColors = Object.keys(board).filter(key => key !== 'boardId');

  const CardsByColorPile = loadingCardData
    ? null
    : boardColors.map(color => {
        const cardIdsForColor = board[color as Colors].cardIds;
        const pileIsSplayed = !!board[color as Colors].splayed;
        // TODO: should be more specific to which splay direction
        if (pileIsSplayed) {
          const CardsInColorPile = cardIdsForColor.map(cardId => {
            const card = cardsById[cardId];
            return <CardFrontBasic key={cardId} card={card} />;
          });
          return <VStack key={color}>{CardsInColorPile}</VStack>;
        }
        const topCard = cardsById[cardIdsForColor[cardIdsForColor.length - 1]];
        return (
          <Container key={color}>
            <CardFrontBasic card={topCard} />
          </Container>
        );
      });

  return (
    <Skeleton isLoading={loadingCardData}>
      <Center>
        <HStack>{CardsByColorPile}</HStack>
      </Center>
    </Skeleton>
  );
};
