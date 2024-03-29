import { CardIds, CardNames, SpecialAchievements } from '../enums';

import { TResourceTotals } from './resources';

export interface IPlayer {
  id: string;
  name: string;
  left: string | null;
  right: string | null;
  isFirst?: boolean;
  age: number;
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
  card: CardNames;
  player: string;
}

export interface IResourcesByPlayer {
  [key: string]: TResourceTotals;
}
