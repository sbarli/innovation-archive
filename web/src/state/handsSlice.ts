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
    addCardToHand: (state, { payload: { playerId, cardId } }: PayloadAction<ICardActionProps>) => {
      if (state.hands[playerId]) {
        state.hands[playerId].push(cardId);
      }
    },
    addCardsToHand: (
      state,
      { payload: { playerId, cardIds } }: PayloadAction<{ playerId: string; cardIds: CardIds[] }>
    ) => {
      if (state.hands[playerId]) {
        cardIds.forEach(cardId => state.hands[playerId].push(cardId));
      }
    },
    removeCardFromHand: (
      state,
      { payload: { playerId, cardId } }: PayloadAction<ICardActionProps>
    ) => {
      if (state.hands[playerId]) {
        const cardIdx = state.hands[playerId].indexOf(cardId);
        if (cardIdx > -1) {
          state.hands[playerId].splice(cardIdx, 1);
        }
      }
    },
    removeCardsFromHands: (state, { payload: { data } }: PayloadAction<{ data: IHands }>) => {
      Object.keys(data).forEach(playerId => {
        const playerHand = state.hands[playerId];
        if (!playerHand) {
          return state;
        }
        data[playerId].forEach(cardId => {
          const cardIdx = playerHand.indexOf(cardId);
          if (cardIdx > -1) {
            state.hands[playerId].splice(cardIdx, 1);
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
