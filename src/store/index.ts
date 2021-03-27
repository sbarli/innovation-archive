import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import cardsReducer from '../state/cardsSlice';
import counterReducer from '../state/counterSlice';
import playersReducer from '../state/playersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cards: cardsReducer,
    players: playersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
