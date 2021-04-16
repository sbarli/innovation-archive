import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { ICardActionProps, IHands } from '../types';

interface IHandsState {
  hands: IHands;
}

const initialState: IHandsState = {
  hands: {},
};

export const handsSlice = createSlice({
  name: 'hands',
  initialState,
  reducers: {
    initHands: (state, { payload: { hands } }: PayloadAction<{ hands: IHands }>) => {
      state.hands = hands;
    },
    addCardToHand: (
      state,
      { payload: { player, color, card } }: PayloadAction<ICardActionProps>
    ) => {
      if (state.hands[player]?.[color]) {
        state.hands[player][color].push(card);
      }
    },
    removeCardFromHand: (
      state,
      { payload: { player, color, card } }: PayloadAction<ICardActionProps>
    ) => {
      if (state.hands[player]?.[color]) {
        const cardIdx = state.hands[player][color].indexOf(card);
        if (cardIdx > -1) {
          state.hands[player][color].splice(cardIdx, 1);
        }
      }
    },
  },
});

export const { initHands, addCardToHand, removeCardFromHand } = handsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.cards.value)`
export const selectHands = (state: RootState) => state.hands.hands;

export default handsSlice.reducer;
