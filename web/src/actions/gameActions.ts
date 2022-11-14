import { cloneDeep } from 'lodash-es';

import { cards as cardsById } from '../data/cardsById';
import { Ages } from '../enums';
import { initAchievements } from '../state/slices/achievementsSlice';
import { updateAllBoards } from '../state/slices/boardsSlice';
import { updateDeck } from '../state/slices/deckSlice';
import { updateAllHands } from '../state/slices/handsSlice';
import {
  initPlayerOrder,
  setWinner,
  updateAllPlayers,
  updateAllResources,
} from '../state/slices/playersSlice';
import { updateAllScores } from '../state/slices/scoresSlice';
import { AppThunk } from '../store';
import { IBoards, IHands, IResourcesByPlayer, IStarterCardIdsData } from '../types';
import {
  createInitialAgeAchievements,
  pullAgeAchievementsFromStarterDeck,
} from '../utils/achievements';
import { sortAndShuffleCards } from '../utils/cards';
import { createDefaultGameData } from '../utils/game';
import { createInitialHandsForPlayers } from '../utils/hand';
import { createBasePlayers, getPlayerOrder, updatePlayersWithOrder } from '../utils/players';
import { calculateTotalResourcesForBoard } from '../utils/resources';

const NUM_CARDS_TO_START = 2;

interface IPlayerName {
  name: string;
}

interface ISetupGameProps {
  players: IPlayerName[];
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const setupGame = ({ players: playerValues }: ISetupGameProps): AppThunk => dispatch => {
  const starterDeck = sortAndShuffleCards(cardsById);
  const players = createBasePlayers(playerValues);
  const numPlayers = playerValues.length;
  const playerIds = Object.keys(players);

  // pull out age achievement cards
  const ageAchievementCardIds = pullAgeAchievementsFromStarterDeck(starterDeck);
  const ageAchievements = createInitialAgeAchievements(ageAchievementCardIds);

  // pull out age 1 cards for player hands
  // NOTE: purposely mutates starterDeck
  const handStartCards = starterDeck[Ages.ONE].splice(0, numPlayers * NUM_CARDS_TO_START);
  // create player hands with starter cards
  const hands = createInitialHandsForPlayers(playerIds, handStartCards);

  // create the following for players
  // - empty board
  // - empty achievements
  // - resources
  // - scores
  // - scorePiles
  const { boards, playerAchievements, playerResources, scores, scorePiles } = createDefaultGameData(
    playerIds
  );

  dispatch(updateDeck({ deck: starterDeck }));
  dispatch(updateAllPlayers({ players }));
  dispatch(updateAllHands({ hands }));
  dispatch(updateAllBoards({ boards }));
  dispatch(initAchievements({ ageAchievements, playerAchievements }));
  dispatch(updateAllScores({ scores, scorePiles }));
  dispatch(updateAllResources({ resources: playerResources }));
};

export const setupPlayerOrder = (
  starterCardIdsData: IStarterCardIdsData[],
  hands: IHands,
  boards: IBoards
): AppThunk => dispatch => {
  // get the name of each card to determine player order
  const starterCardNamesData = starterCardIdsData.map(val => {
    const cardName = cardsById[val.card].name;
    return {
      card: cardName,
      player: val.player,
    };
  });
  const playerOrder = getPlayerOrder(starterCardNamesData);
  const updatedPlayersWithOrder = updatePlayersWithOrder(playerOrder);

  const { updatedBoards, updatedHands } = starterCardIdsData.reduce(
    (acc, val) => {
      const cardColor = cardsById[val.card].color;
      const cardIdxInHand = acc.updatedHands[val.player].indexOf(val.card);
      if (cardIdxInHand > -1) {
        acc.updatedHands[val.player] = [
          ...acc.updatedHands[val.player].slice(0, cardIdxInHand),
          ...acc.updatedHands[val.player].slice(cardIdxInHand),
        ];
        acc.updatedBoards[val.player][cardColor].cards = [
          ...acc.updatedBoards[val.player][cardColor].cards,
          val.card,
        ];
      }
      return acc;
    },
    {
      updatedBoards: cloneDeep(boards),
      updatedHands: cloneDeep(hands),
    }
  );

  // update resources totals for players
  const updatedResources = Object.keys(updatedBoards).reduce((acc, playerId) => {
    const playerBoard = updatedBoards[playerId];
    const playerResourceTotal = calculateTotalResourcesForBoard(playerBoard);
    acc[playerId] = playerResourceTotal;
    return acc;
  }, {} as IResourcesByPlayer);

  dispatch(initPlayerOrder({ playerOrder }));
  dispatch(updateAllHands({ hands: updatedHands }));
  dispatch(updateAllBoards({ boards: updatedBoards }));
  dispatch(updateAllResources({ resources: updatedResources }));
  dispatch(updateAllPlayers({ players: updatedPlayersWithOrder }));
};

export const setWinningPlayer = (playerId: string): AppThunk => dispatch => {
  dispatch(setWinner({ playerId }));
};
