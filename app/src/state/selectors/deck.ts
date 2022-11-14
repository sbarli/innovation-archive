import { Ages } from '../../enums';
import { RootState } from '../../store';

export const selectDeck = (state: RootState) => state.deck;
export const selectAgeCards = (state: RootState, age: Ages) => state.deck[age];
