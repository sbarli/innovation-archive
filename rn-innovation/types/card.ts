export interface IResourceTotals {
  numCastles: number;
  numCrowns: number;
  numLeaves: number;
  numLightbulbs: number;
  numFactories: number;
  numTimepieces: number;
}

export interface IResourceSpaces {
  resourceSpace1?: string;
  resourceSpace2?: string;
  resourceSpace3?: string;
  resourceSpace4?: string;
}

export interface IDogmaEffect {
  description: string;
  effectId?: string;
  effectType?: string[];
  isDemand: boolean;
  isOptional: boolean;
  repeat: boolean;
  specialAchievement?: string;
}

export interface ICard {
  age: number;
  cardId: string;
  color: string;
  dogmaEffects: IDogmaEffect[];
  dogmaResource: string;
  name: string;
  resourceSpaces: IResourceSpaces;
  resourceTotals: IResourceTotals;
}