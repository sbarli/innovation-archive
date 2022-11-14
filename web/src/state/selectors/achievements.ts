import { RootState } from '../../store';

export const selectAgeAchievements = (state: RootState) => state.achievements.ageAchievements;
export const selectSpecialAchievements = (state: RootState) =>
  state.achievements.specialAchievements;
export const selectPlayersAchievements = (state: RootState) =>
  state.achievements.playerAchievements;
export const selectPlayerAchievements = (state: RootState, playerId: string) =>
  state.achievements.playerAchievements[playerId];
