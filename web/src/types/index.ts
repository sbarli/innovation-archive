import { ReactNode } from 'react';

export * from './achievements';
export * from './cards';
export * from './board';
export * from './hands';
export * from './players';
export * from './resources';
export * from './scores';
export interface IBaseProps {
  className?: string;
  children?: ReactNode;
  'data-testid'?: string;
}

export type TActionFunc = (...args: any) => void;

export type TPlayerActionClosureFunc = (playerId: string) => TActionFunc;
