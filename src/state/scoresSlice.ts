import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { ICard, IScorePilesByPlayer, IScoresByPlayer } from '../types';

interface IPlayerAndCardProps {
  playerId: string;
  card: ICard;
}

interface IScoresState {
  scores: IScoresByPlayer;
  scorePiles: IScorePilesByPlayer;
}

export const initialState: IScoresState = {
  scores: {},
  scorePiles: {},
};

export const scoresSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {
    initScores: (state, { payload: { scores, scorePiles } }: PayloadAction<IScoresState>) => {
      state.scores = scores;
      state.scorePiles = scorePiles;
    },
    increaseScore: (state, { payload: { playerId, card } }: PayloadAction<IPlayerAndCardProps>) => {
      state.scores[playerId] += card.age;
      if (Array.isArray(state.scorePiles[playerId])) {
        state.scorePiles[playerId].push(card.id);
      }
    },
    decreaseScore: (state, { payload: { playerId, card } }: PayloadAction<IPlayerAndCardProps>) => {
      if (Array.isArray(state.scorePiles[playerId])) {
        const playerScorePile = state.scorePiles[playerId];
        const cardToRemoveIdx = playerScorePile.indexOf(card.id);
        if (cardToRemoveIdx > -1) {
          state.scores[playerId] -= card.age;
          state.scorePiles[playerId].splice(cardToRemoveIdx, 1);
        }
      }
    },
  },
});

export const { initScores, increaseScore, decreaseScore } = scoresSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.cards.value)`
export const selectScores = (state: RootState) => state.scores.scores;
export const selectScorePiles = (state: RootState) => state.scores.scorePiles;
export const selectPlayerScore = (state: RootState, playerId: string) =>
  state.scores.scores[playerId];

export default scoresSlice.reducer;
