import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CardIds } from '../../enums';
import { IScorePilesByPlayer, IScoresByPlayer } from '../../types';

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
    updateAllScores: (state, { payload: { scores, scorePiles } }: PayloadAction<IScoresState>) => {
      state.scores = scores;
      state.scorePiles = scorePiles;
    },
    updatePlayerScore: (
      state,
      {
        payload: { playerId, score, scorePile },
      }: PayloadAction<{ playerId: string; score: number; scorePile: CardIds[] }>
    ) => {
      if (state.scores[playerId] && state.scorePiles[playerId]) {
        state.scores[playerId] = score;
        state.scorePiles[playerId] = scorePile;
      }
    },
  },
});

export const { updateAllScores, updatePlayerScore } = scoresSlice.actions;

export default scoresSlice.reducer;
