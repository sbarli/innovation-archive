import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Colors } from '../enums';
import { RootState } from '../store';
import { ICard, ICardActionProps, IHands, THand } from '../types';

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
    addCardToHand: (
      state,
      { payload: { player, color, card } }: PayloadAction<ICardActionProps>
    ) => {
      if (state.hands[player]?.[color]) {
        state.hands[player][color].push(card);
      }
    },
    addCardsToHand: (
      state,
      { payload: { player, data } }: PayloadAction<{ player: string; data: THand }>
    ) => {
      if (state.hands[player]) {
        Object.keys(data).forEach(c => {
          const color = c as Colors;
          state.hands[player][color] = [...state.hands[player][color], ...data[color]];
        });
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
    removeCardsFromHands: (
      state,
      { payload: { data } }: PayloadAction<{ data: { [key: string]: ICard[] } }>
    ) => {
      Object.keys(data).forEach(player => {
        const playerHand = state.hands[player];
        if (!playerHand) {
          return state;
        }
        data[player].forEach(card => {
          const cardIdx = playerHand[card.color].indexOf(card.id);
          if (cardIdx > -1) {
            state.hands[player][card.color].splice(cardIdx, 1);
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
