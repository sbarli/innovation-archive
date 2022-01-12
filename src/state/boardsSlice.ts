import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { BoardPlacementOptions, CardIds, Colors, SplayDirections } from '../enums';
import { RootState } from '../store';
import { IBoards, ICard } from '../types';

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

interface IBoardsState {
  boards: IBoards;
}

export const initialState: IBoardsState = {
  boards: {},
};

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    initBoards: (state, { payload: { boards } }: PayloadAction<{ boards: IBoards }>) => {
      state.boards = boards;
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
    addCardsToBoards: (
      state,
      { payload: { data } }: PayloadAction<{ data: { [key: string]: ICard[] } }>
    ) => {
      Object.keys(data).forEach(player => {
        if (!state.boards[player]) {
          return state;
        }
        data[player].forEach(card => {
          state.boards[player][card.color].cards.unshift(card.id);
        });
      });
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
  addCardToBoard,
  addCardsToBoards,
  initBoards,
  removeCardFromBoard,
  splayColor,
  unsplayColor,
} = boardsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.cards.value)
export const selectBoards = (state: RootState) => state.boards.boards;

export default boardsSlice.reducer;
