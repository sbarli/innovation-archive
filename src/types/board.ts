import { CardIds, Colors, SplayDirections } from '../enums';

export interface IBoardPile {
  cards: CardIds[];
  splayed: SplayDirections | null;
}

export type TBoard = {
  [key in Colors]: IBoardPile;
};

export interface IBoard extends TBoard {
  player: string;
}

export interface IBoards {
  [key: string]: IBoard;
}
