import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { cards as cardData } from '../data/cardsById';
import { Ages, CardIds } from '../enums';
import { RootState } from '../store';
import { ICard, IDogmaEffect, TCardIdsByAge, TCardsById } from '../types';

interface ICardsState {
  cards: TCardsById;
  dogmaEffects: IDogmaEffect[];
  deck: TCardIdsByAge | null;
}

export const initialState: ICardsState = {
  cards: cardData,
  dogmaEffects: [],
  deck: null,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    removeCardFromDeck: (
      state,
      { payload: { age, cardId } }: PayloadAction<{ age: Ages; cardId: CardIds }>
    ) => {
      const cardIdxToRemove = state.deck?.[age]?.indexOf(cardId) ?? -1;
      if (state.deck?.[age] && cardIdxToRemove > -1) {
        state.deck[age].splice(cardIdxToRemove, 1);
      }
    },
    returnCardsToDeck: (state, { payload: { cards } }: PayloadAction<{ cards: ICard[] }>) => {
      cards.forEach(card => {
        if (state.deck) {
          state.deck[card.age].unshift(card.id);
        }
      });
    },
    updateAgePile: (
      state,
      { payload: { age, newPile } }: PayloadAction<{ age: Ages; newPile: CardIds[] }>
    ) => {
      if (state.deck) {
        state.deck[age] = newPile;
      }
    },
    updateDeck: (state, { payload: { deck } }: PayloadAction<{ deck: TCardIdsByAge }>) => {
      state.deck = deck;
    },
  },
});

export const {
  removeCardFromDeck,
  returnCardsToDeck,
  updateAgePile,
  updateDeck,
} = cardsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.cards.value)`
export const selectCards = (state: RootState) => state.cards.cards;
export const selectDeck = (state: RootState) => state.cards.deck;
export const selectAgeCards = (state: RootState, age: Ages) =>
  state.cards.deck ? state.cards.deck[age] : state.cards.deck;

export default cardsSlice.reducer;
