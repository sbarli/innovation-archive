import { ReactNode } from 'react';

export interface IBaseProps {
  className?: string;
  children?: ReactNode;
  'data-testid'?: string;
}
