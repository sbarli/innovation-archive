import { CardIds, Colors, SplayDirections } from '../enums';

export interface IBoardPile {
  cards: CardIds[];
  splayed: SplayDirections | null;
}

export interface IBoard {
  player: string;
  [Colors.RED]: IBoardPile;
  [Colors.BLUE]: IBoardPile;
  [Colors.GREEN]: IBoardPile;
  [Colors.PURPLE]: IBoardPile;
  [Colors.YELLOW]: IBoardPile;
}
