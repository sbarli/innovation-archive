import { CardIds, SpecialAchievements } from '../enums';

export interface IPlayer {
  id: string;
  name: string;
  left: string | null;
  right: string | null;
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

export interface IStarterCardsData {
  card: string;
  player: string;
}
