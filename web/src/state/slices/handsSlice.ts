import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CardIds } from '../../enums';
import { IHands } from '../../types';

interface IHandsState {
  hands: IHands;
}

export const initialState: IHandsState = {
  hands: {},
};

export const handsSlice = createSlice({
  name: 'hands',
  initialState,
  reducers: {
    updateAllHands: (state, { payload: { hands } }: PayloadAction<{ hands: IHands }>) => {
      state.hands = hands;
    },
    updatePlayerHand: (
      state,
      { payload: { hand, playerId } }: PayloadAction<{ hand: CardIds[]; playerId: string }>
    ) => {
      if (state.hands[playerId]) {
        state.hands[playerId] = hand;
      }
    },
  },
});

export const { updateAllHands, updatePlayerHand } = handsSlice.actions;

export default handsSlice.reducer;
