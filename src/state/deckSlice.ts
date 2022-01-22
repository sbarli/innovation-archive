import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Ages, CardIds } from '../enums';
import { RootState } from '../store';
import { ICard, TCardIdsByAge } from '../types';

export const initialState: TCardIdsByAge = {
  [Ages.ONE]: [],
  [Ages.TWO]: [],
  [Ages.THREE]: [],
  [Ages.FOUR]: [],
  [Ages.FIVE]: [],
  [Ages.SIX]: [],
  [Ages.SEVEN]: [],
  [Ages.EIGHT]: [],
  [Ages.NINE]: [],
  [Ages.TEN]: [],
};

export const deckSlice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
    removeCardFromDeck: (
      state,
      { payload: { age, cardId } }: PayloadAction<{ age: Ages; cardId: CardIds }>
    ) => {
      const cardIdxToRemove = state[age].indexOf(cardId) ?? -1;
      if (cardIdxToRemove > -1) {
        state[age].splice(cardIdxToRemove, 1);
      }
    },
    returnCardsToDeck: (state, { payload: { cards } }: PayloadAction<{ cards: ICard[] }>) => {
      cards.forEach(card => {
        state[card.age].unshift(card.id);
      });
    },
    updateAgePile: (
      state,
      { payload: { age, newPile } }: PayloadAction<{ age: Ages; newPile: CardIds[] }>
    ) => {
      state[age] = newPile;
    },
    updateDeck: (state, { payload: { deck } }: PayloadAction<{ deck: TCardIdsByAge }>) => {
      state = deck;
    },
  },
});

export const {
  removeCardFromDeck,
  returnCardsToDeck,
  updateAgePile,
  updateDeck,
} = deckSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.cards.value)`
export const selectAgeCards = (state: RootState, age: Ages) => state.deck[age];

export default deckSlice.reducer;
