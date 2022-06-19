import { Box, Container, Text, HStack, Center } from 'native-base';
import { ICard } from '../../../types';

interface ICardFrontBasicProps {
  card: ICard;
}

export const CardFrontBasic = ({ card }: ICardFrontBasicProps) => {

  return (
    <Container h="125" w="275" borderRadius="lg"
      borderColor="black"
      borderWidth="1"
      style={{
        transform: [{ rotate: '270deg' }],
      }}
    >
      <HStack
        key={card.cardId}
        w="full"
        h="full"
        alignItems="center"
        justifyContent="space-between"
        padding="5"
      >
        <Box>
          <Center>
            <Text
              style={{
                letterSpacing: 1.5,
              }}
            >
              {card.name.toUpperCase()}
            </Text>
          </Center>
        </Box>
        <Box
          borderRadius="full"
          borderColor="black"
          borderWidth="1"
          h="8"
          w="8"
          alignItems="center"
          justifyContent="center"
        >
          <Text
          >{card.age}</Text>
        </Box>
      </HStack>
    </Container>
  );
};
