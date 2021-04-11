import { Ages, CardIds, CardNames, Colors, Resources, SpecialAchievements } from '../enums';

export type TCardsById = {
  [key in CardIds]: ICard;
};

export type TCardIdsByAge = {
  [key in Ages]: CardIds[];
};

export type TDeck = {
  [key in Ages]: CardIds[];
};

export type THand = {
  [key in Colors]: CardIds[];
};

export interface IDogmaEffect {
  description: string;
  code: () => void;
  isDemand?: boolean;
}

export interface ICard {
  id: CardIds;
  name: CardNames;
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
