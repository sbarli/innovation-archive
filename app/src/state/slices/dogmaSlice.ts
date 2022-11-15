import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CardIds } from '../../enums';

interface IDogmasState {
  dogmaCardId: CardIds | null;
  playerId: string | null;
  playersToShare: string[]; // playerIds for those sharing
}

export const initialState: IDogmasState = {
  dogmaCardId: null,
  playerId: null,
  playersToShare: [],
};

export const dogmasSlice = createSlice({
  name: 'dogmas',
  initialState,
  reducers: {
    dogmaStart: (
      state,
      {
        payload: { dogmaCardId, playerId },
      }: PayloadAction<{ dogmaCardId: CardIds; playerId: string }>
    ) => {
      state.dogmaCardId = dogmaCardId;
      state.playerId = playerId;
    },
    dogmaComplete: state => {
      state.dogmaCardId = null;
      state.playerId = null;
      state.playersToShare = [];
    },
  },
});

export const { dogmaStart, dogmaComplete } = dogmasSlice.actions;

export default dogmasSlice.reducer;
