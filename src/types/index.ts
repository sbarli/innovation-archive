import { ReactNode } from 'react';

export * from './cards';
export * from './board';
export * from './players';
export * from './scores';
export interface IBaseProps {
  className?: string;
  children?: ReactNode;
  'data-testid'?: string;
}
