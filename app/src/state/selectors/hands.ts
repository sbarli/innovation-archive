import { RootState } from '../../store';

export const selectHands = (state: RootState) => state.hands.hands;
export const selectPlayerHand = (state: RootState, playerId: string) => state.hands.hands[playerId];
