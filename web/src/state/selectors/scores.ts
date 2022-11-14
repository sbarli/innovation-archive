import { RootState } from '../../store';

export const selectScores = (state: RootState) => state.scores.scores;
export const selectScorePiles = (state: RootState) => state.scores.scorePiles;
export const selectPlayerScore = (state: RootState, playerId: string) =>
  state.scores.scores[playerId];
export const selectPlayerScoreAndPile = (state: RootState, playerId: string) => ({
  score: state.scores.scores[playerId],
  scorePile: state.scores.scorePiles[playerId],
});
