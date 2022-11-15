import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import achievementsReducer from '../state/slices/achievementsSlice';
import boardsReducer from '../state/slices/boardsSlice';
import deckReducer from '../state/slices/deckSlice';
import dogmasSlice from '../state/slices/dogmaSlice';
import handsReducer from '../state/slices/handsSlice';
import logReducer from '../state/slices/logSlice';
import playersReducer from '../state/slices/playersSlice';
import scoresReducer from '../state/slices/scoresSlice';

export const store = configureStore({
  reducer: {
    achievements: achievementsReducer,
    boards: boardsReducer,
    deck: deckReducer,
    dogmas: dogmasSlice,
    hands: handsReducer,
    log: logReducer,
    players: playersReducer,
    scores: scoresReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
