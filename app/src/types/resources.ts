import { Resources } from '../enums';

export type TResourceTotals = {
  [key in Resources]: number;
};
