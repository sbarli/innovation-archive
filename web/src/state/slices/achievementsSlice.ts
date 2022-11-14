import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
  Ages,
  BASE_AGE_ACHIEVEMENTS,
  BASE_SPECIAL_ACHIEVEMENTS,
  SpecialAchievements,
} from '../../enums';
import { IAchievementsByPlayer, TAgeAchievements, TSpecialAchievements } from '../../types';

interface ICardsState {
  specialAchievements: TSpecialAchievements;
  ageAchievements: TAgeAchievements;
  playerAchievements: IAchievementsByPlayer;
}

export const initialState: ICardsState = {
  specialAchievements: { ...BASE_SPECIAL_ACHIEVEMENTS },
  ageAchievements: { ...BASE_AGE_ACHIEVEMENTS },
  playerAchievements: {},
};

export const achievementsSlice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {
    initAchievements: (
      state,
      {
        payload: { ageAchievements, playerAchievements },
      }: PayloadAction<{
        ageAchievements: TAgeAchievements;
        playerAchievements: IAchievementsByPlayer;
      }>
    ) => {
      state.ageAchievements = ageAchievements;
      state.playerAchievements = playerAchievements;
    },
    applyPlayerAgeAchievement: (
      state,
      { payload: { playerId, age } }: PayloadAction<{ playerId: string; age: Ages }>
    ) => {
      if (state.ageAchievements[age].isAvailable) {
        const cardId = state.ageAchievements[age].card;
        state.ageAchievements[age].isAvailable = false;
        if (cardId && state.playerAchievements?.[playerId]?.ageAchievements) {
          state.playerAchievements[playerId].ageAchievements.push(cardId);
        }
      }
    },
    applyPlayerSpecialAchievement: (
      state,
      {
        payload: { playerId, specialAchievement },
      }: PayloadAction<{ playerId: string; specialAchievement: SpecialAchievements }>
    ) => {
      state.specialAchievements[specialAchievement] = false;
      if (state.playerAchievements?.[playerId]?.specialAchievements) {
        state.playerAchievements[playerId].specialAchievements.push(specialAchievement);
      }
    },
  },
});

export const {
  initAchievements,
  applyPlayerAgeAchievement,
  applyPlayerSpecialAchievement,
} = achievementsSlice.actions;

export default achievementsSlice.reducer;
