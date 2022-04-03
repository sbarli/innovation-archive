import { CardIds, Colors, SplayDirections } from '../enums';

export interface IBoardPile {
  cards: CardIds[];
  splayed: SplayDirections | null;
}

export type TBoard = {
  [key in Colors]: IBoardPile;
};

export interface IBoards {
  [key: string]: TBoard;
}
