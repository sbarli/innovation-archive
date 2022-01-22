import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CardIds } from '../enums';
import { RootState } from '../store';
import { ICardActionProps, IHands } from '../types';

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
    initHands: (state, { payload: { hands } }: PayloadAction<{ hands: IHands }>) => {
      state.hands = hands;
    },
    addCardToHand: (state, { payload: { player, cardId } }: PayloadAction<ICardActionProps>) => {
      if (state.hands[player]) {
        state.hands[player].push(cardId);
      }
    },
    addCardsToHand: (
      state,
      { payload: { player, data } }: PayloadAction<{ player: string; data: CardIds[] }>
    ) => {
      if (state.hands[player]) {
        data.forEach(card => state.hands[player].push(card));
      }
    },
    removeCardFromHand: (
      state,
      { payload: { player, cardId } }: PayloadAction<ICardActionProps>
    ) => {
      if (state.hands[player]) {
        const cardIdx = state.hands[player].indexOf(cardId);
        if (cardIdx > -1) {
          state.hands[player].splice(cardIdx, 1);
        }
      }
    },
    removeCardsFromHands: (
      state,
      { payload: { data } }: PayloadAction<{ data: { [key: string]: CardIds[] } }>
    ) => {
      Object.keys(data).forEach(player => {
        const playerHand = state.hands[player];
        if (!playerHand) {
          return state;
        }
        data[player].forEach(cardId => {
          const cardIdx = playerHand.indexOf(cardId);
          if (cardIdx > -1) {
            state.hands[player].splice(cardIdx, 1);
          }
        });
      });
    },
  },
});

export const {
  initHands,
  addCardToHand,
  addCardsToHand,
  removeCardFromHand,
  removeCardsFromHands,
} = handsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.cards.value)`
export const selectHands = (state: RootState) => state.hands.hands;
export const selectPlayerHand = (state: RootState, playerId: string) => state.hands.hands[playerId];

export default handsSlice.reducer;
