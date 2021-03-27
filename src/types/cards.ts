import { Ages, Cards, Colors, Resources, SpecialAchievements } from '../enums';

export interface IDogmaEffect {
  description: string;
  code: () => void;
  isDemand?: boolean;
}

export interface ICard {
  name: Cards;
  age: Ages;
  color: Colors;
  dogmaResource: Resources;
  numCastles: number;
  numCrowns: number;
  numLeaves: number;
  numLightbulbs: number;
  numFactories: number;
  numTimepieces: number;
  resourceSpace1: Resources | null;
  resourceSpace2: Resources | null;
  resourceSpace3: Resources | null;
  resourceSpace4: Resources | null;
  dogmaEffects: IDogmaEffect[];
  specialAchievement?: SpecialAchievements;
}
