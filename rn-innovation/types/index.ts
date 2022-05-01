import { ReactNode } from "react";

export * from './card';

export interface IBaseProps {
  className?: string;
  children?: ReactNode;
  'data-testid'?: string;
}