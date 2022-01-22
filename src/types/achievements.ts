import { Ages, CardIds, SpecialAchievements } from '../enums';

export interface IAgeAchievement {
  card: CardIds | undefined;
  cost: number;
  isAvailable: boolean;
}

export type TAgeAchievements = {
  [key in Ages]: IAgeAchievement;
};

export type TSpecialAchievements = {
  [key in SpecialAchievements]: boolean;
};
