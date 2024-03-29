import { Ages, CardIds, CardNames, Colors, Resources, SpecialAchievements } from '../enums';

export type TCardsById = {
  [key in CardIds]: ICard;
};

export type TCardIdsByAge = {
  [key in Ages]: CardIds[];
};

export type TCardIdsByColor = {
  [key in Colors]: CardIds[];
};

export interface IDogmaEffect {
  description: string;
  effectId?: string;
  effectType?: string[];
  isDemand: boolean;
  isOptional: boolean;
  repeat: boolean;
  specialAchievement: SpecialAchievements | null;
  dogma(): void;
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
  cardId: CardIds;
  playerId: string;
}

export interface IStarterCardIdsData {
  card: CardIds;
  player: string;
}
