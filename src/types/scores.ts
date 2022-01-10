import { CardIds } from '../enums';

export interface IScoresByPlayer {
  [key: string]: number;
}

export interface IScorePilesByPlayer {
  [key: string]: CardIds[];
}
