import { Ages, CardIds, CardNames, Colors, Resources, SpecialAchievements } from '../enums';

export type TCardsById = {
  [key in CardIds]: ICard;
};

export type TCardIdsByAge = {
  [key in Ages]: CardIds[];
};

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

export type TDeck = {
  [key in Ages]: CardIds[];
};

export type THand = {
  [key in Colors]: CardIds[];
};

export type TResourceTotals = {
  [key in Resources]: number;
};

export interface IHands {
  [key: string]: THand;
}

export interface IDogmaEffect {
  effectId: string;
  description: string;
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

export interface ICardActionProps {
  player: string;
  card: CardIds;
  color: Colors;
}

export interface IStarterCardIdsData {
  card: CardIds;
  player: string;
}
