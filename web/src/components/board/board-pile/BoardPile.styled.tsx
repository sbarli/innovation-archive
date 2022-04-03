import styled, { css } from 'styled-components/macro';

import { Colors, SplayDirections } from '../../../enums';
import { cardWrapperStyles } from '../../../styles/card';

const splayedRightStyles = css<{ placeInPile: number }>`
  z-index: ${p => p.placeInPile + 1 * 100};
  margin-left: calc(1rem * ${p => p.placeInPile});
`;

const splayedLeftStyles = css<{ placeInPile: number }>`
  z-index: ${p => p.placeInPile + 1 * 100};
  margin-right: calc(1rem * ${p => p.placeInPile});
`;

const splayedUpStyles = css<{ placeInPile: number }>`
  z-index: ${p => p.placeInPile + 1 * 100};
  margin-bottom: calc(1rem * ${p => p.placeInPile});
`;

const noCardsInPileStyles = css<{ color: Colors }>`
  ${cardWrapperStyles}
  border-color: ${p => p.color};
  height: 160px;
  border-style: dashed;
  background-color: var(--color-gray-light);
`;

export const BoardPileWrapper = styled.div<{ cardsInPile: boolean; color: Colors }>`
  ${p => (!p.cardsInPile ? noCardsInPileStyles : '')}
  position: relative;
`;

export const CardPosition = styled.div<{
  placeInPile: number;
  splayDirection: SplayDirections | null;
}>`
  /* TODO: should be absolute to get splay direction right, but messes up rows */
  position: relative;
  top: 0;
  left: 0;
  ${p => (p.splayDirection === SplayDirections.RIGHT ? splayedRightStyles : '')}
  ${p => (p.splayDirection === SplayDirections.LEFT ? splayedLeftStyles : '')}
  ${p => (p.splayDirection === SplayDirections.UP ? splayedUpStyles : '')}
`;
