import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { cards as cardData } from '../data/cardsById';
import { Ages, BoardPlacementOptions, CardIds, Colors, SplayDirections } from '../enums';
import { RootState } from '../store';
import { IBoard, ICard, IDogmaEffect, IHands, TCardIdsByAge, TCardsById } from '../types';
import { createBaseBoard } from '../utils/cardUtils';

interface ICardActionProps {
  player: string;
  card: CardIds;
  color: Colors;
}

interface IBoardCardActionProps extends ICardActionProps {
  placement: BoardPlacementOptions;
}

interface IBaseSplayActionProps {
  player: string;
  color: Colors;
}

interface ISplayActionProps extends IBaseSplayActionProps {
  direction: SplayDirections;
}

interface IUnsplayActionProps extends IBaseSplayActionProps {
  forced: boolean;
}

interface ICardsState {
  cards: TCardsById;
  dogmaEffects: IDogmaEffect[];
  boards: {
    [key: string]: IBoard;
  };
  hands: IHands;
  deck: TCardIdsByAge | null;
}

const initialState: ICardsState = {
  cards: cardData,
  dogmaEffects: [],
  boards: {},
  hands: {},
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

    // hand reducers
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

    // board reducers
    initPlayerBoard: (state, { payload: { player } }: PayloadAction<{ player: string }>) => {
      if (!state.boards[player]) {
        state.boards[player] = createBaseBoard(player);
      }
    },
    addCardToBoard: (
      state,
      { payload: { player, color, card, placement } }: PayloadAction<IBoardCardActionProps>
    ) => {
      if (state.boards[player]?.[color].cards) {
        if (placement === BoardPlacementOptions.TUCK) {
          state.boards[player][color].cards.push(card);
        }
        state.boards[player][color].cards.unshift(card);
      }
    },
    removeCardFromBoard: (
      state,
      { payload: { player, color, card } }: PayloadAction<ICardActionProps>
    ) => {
      if (state.boards[player]?.[color]) {
        const cardIdx = state.boards[player][color].cards.indexOf(card);
        if (cardIdx > -1) {
          state.boards[player][color].cards.splice(cardIdx, 1);
        }
      }
    },
    splayColor: (
      state,
      { payload: { player, color, direction } }: PayloadAction<ISplayActionProps>
    ) => {
      if (state.boards[player]?.[color].cards.length > 1) {
        state.boards[player][color].splayed = direction;
      }
    },
    unsplayColor: (
      state,
      { payload: { player, color, forced = false } }: PayloadAction<IUnsplayActionProps>
    ) => {
      if (
        state.boards[player]?.[color].splayed &&
        (forced || state.boards[player]?.[color].cards.length < 2)
      ) {
        state.boards[player][color].splayed = null;
      }
    },
  },
});

export const {
  initDeck,
  drawCardsFromDeck,
  returnCardsToDeck,
  initHands,
  addCardToHand,
  removeCardFromHand,
  initPlayerBoard,
  addCardToBoard,
  removeCardFromBoard,
  splayColor,
  unsplayColor,
} = cardsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.cards.value)`
export const selectCards = (state: RootState) => state.cards.cards;
export const selectHands = (state: RootState) => state.cards.hands;
export const selectBoards = (state: RootState) => state.cards.boards;

export default cardsSlice.reducer;
