import { CardIds, SpecialAchievements } from '../enums';

export interface IPlayer {
  id: string;
  name: string;
  left: string;
  right: string;
  isFirst?: boolean;
}

export interface IPlayers {
  [key: string]: IPlayer;
}

export interface IPlayerAchievements {
  ageAchievements: CardIds[];
  specialAchievements: SpecialAchievements[];
  totalAchievements: number;
}

export interface IAchievementsByPlayer {
  [key: string]: IPlayerAchievements;
}
