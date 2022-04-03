import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { getAllTestData } from '../firebase/get/test-data';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [fetchedData, setFetchedData] = useState(false);
  const [boards, setBoards] = useState<any>();
  const [cards, setCards] = useState<any>();
  const [deck, setDeck] = useState<any>();
  const [game, setGame] = useState<any>();
  const [players, setPlayers] = useState<any>();

  useEffect(() => {
    const retrieveTestData = async () => {
      const { boards, cards, deck, game, players } = await getAllTestData();
      setFetchedData(true);
      setBoards(boards);
      setCards(cards);
      setDeck(deck);
      setGame(game);
      setPlayers(players);
    };
    if (!fetchedData) {
      retrieveTestData();
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
