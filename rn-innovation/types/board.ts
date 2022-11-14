import {CardIds, Colors, SplayDirections} from '../enums/cards';

export interface IBoardPile {
  cardIds: CardIds[];
  splayed: SplayDirections | null;
}

export type TBoard = {
  [key in Colors]: IBoardPile;
};
