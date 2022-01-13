import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { cards as cardData } from '../data/cardsById';
import { Ages } from '../enums';
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
    // deck reducers
    initDeck: (state, { payload: { deck } }: PayloadAction<{ deck: TCardIdsByAge }>) => {
      state.deck = deck;
    },
    drawCardsFromDeck: (
      state,
      { payload: { agesToDraw } }: PayloadAction<{ agesToDraw: { age: Ages; numCards: number }[] }>
    ) => {
      agesToDraw.forEach(data => {
        if (state.deck?.[data.age]) {
          state.deck[data.age].splice(state.deck[data.age].length - data.numCards, data.numCards);
        }
      });
    },
    returnCardsToDeck: (state, { payload: { cards } }: PayloadAction<{ cards: ICard[] }>) => {
      cards.forEach(card => {
        if (state.deck) {
          state.deck[card.age].unshift(card.id);
        }
      });
    },
  },
});

export const { initDeck, drawCardsFromDeck, returnCardsToDeck } = cardsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.cards.value)`
export const selectCards = (state: RootState) => state.cards.cards;
export const selectDeck = (state: RootState) => state.cards.deck;
export const selectAgeCards = (state: RootState, age: Ages) =>
  state.cards.deck ? state.cards.deck[age] : state.cards.deck;

export default cardsSlice.reducer;
