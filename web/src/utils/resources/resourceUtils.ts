import castleImage from '../../assets/resources/castle.png';
import crownImage from '../../assets/resources/crown.png';
import factoryImage from '../../assets/resources/factory.png';
import leafImage from '../../assets/resources/leaf.png';
import lightbulbImage from '../../assets/resources/lightbulb.png';
import timepieceImage from '../../assets/resources/timepiece.png';
import { CardIds, Resources, SplayDirections } from '../../enums';
import { IBoardPile, TBoard, TResourceTotals } from '../../types';
import { getCardById } from '../cards';

type TResourceToResourceImageMap = {
  [key in Resources]: string;
};
export const resourceToResourceImageMap: TResourceToResourceImageMap = Object.freeze({
  [Resources.CASTLES]: castleImage,
  [Resources.CROWNS]: crownImage,
  [Resources.FACTORIES]: factoryImage,
  [Resources.LEAVES]: leafImage,
  [Resources.LIGHTBULBS]: lightbulbImage,
  [Resources.TIMEPIECES]: timepieceImage,
});

const baseCardResourceTotals: TResourceTotals = Object.freeze({
  [Resources.CASTLES]: 0,
  [Resources.CROWNS]: 0,
  [Resources.FACTORIES]: 0,
  [Resources.LEAVES]: 0,
  [Resources.LIGHTBULBS]: 0,
  [Resources.TIMEPIECES]: 0,
});

export const createInitialResourceTotals = () => ({ ...baseCardResourceTotals });

export const createCardResources = (cardId: CardIds) => {
  const card = getCardById(cardId);

  const cardResourceTotals = createInitialResourceTotals();

  cardResourceTotals[Resources.CASTLES] = card.numCastles;
  cardResourceTotals[Resources.CROWNS] = card.numCrowns;
  cardResourceTotals[Resources.FACTORIES] = card.numFactories;
  cardResourceTotals[Resources.LEAVES] = card.numLeaves;
  cardResourceTotals[Resources.LIGHTBULBS] = card.numLightbulbs;
  cardResourceTotals[Resources.TIMEPIECES] = card.numTimepieces;

  return cardResourceTotals;
};

export const combineResourceTotals = (...args: TResourceTotals[]) =>
  args.reduce(
    (updatedResourceTotals, item) => {
      updatedResourceTotals[Resources.CASTLES] += item[Resources.CASTLES];
      updatedResourceTotals[Resources.CROWNS] += item[Resources.CROWNS];
      updatedResourceTotals[Resources.FACTORIES] += item[Resources.FACTORIES];
      updatedResourceTotals[Resources.LEAVES] += item[Resources.LEAVES];
      updatedResourceTotals[Resources.LIGHTBULBS] += item[Resources.LIGHTBULBS];
      updatedResourceTotals[Resources.TIMEPIECES] += item[Resources.TIMEPIECES];
      return updatedResourceTotals;
    },
    { ...baseCardResourceTotals } as TResourceTotals
  );

interface IUpdateResourceTotalsWhenMeldingProps {
  coveringCardId?: CardIds;
  meldingCardId: CardIds;
  resourceTotals: TResourceTotals;
  splayDirection: SplayDirections | null;
}
export const updateResourceTotalsWhenMelding = ({
  coveringCardId,
  meldingCardId,
  resourceTotals,
  splayDirection = null,
}: IUpdateResourceTotalsWhenMeldingProps) => {
  const coveringCard = coveringCardId ? getCardById(coveringCardId) : null;
  const meldingCard = getCardById(meldingCardId);
  if (!meldingCard || (coveringCardId && !coveringCard)) {
    return resourceTotals;
  }
  const updatedResourceTotals = { ...resourceTotals };
  // remove resources for card being covered (if exists)
  if (coveringCard) {
    // resource removal depends on whether the pile is splayed or not
    switch (splayDirection) {
      case SplayDirections.LEFT:
        // remove resource spaces 1, 2, 3
        if (coveringCard.resourceSpace1) {
          updatedResourceTotals[coveringCard.resourceSpace1] -= 1;
        }
        if (coveringCard.resourceSpace2) {
          updatedResourceTotals[coveringCard.resourceSpace2] -= 1;
        }
        if (coveringCard.resourceSpace3) {
          updatedResourceTotals[coveringCard.resourceSpace3] -= 1;
        }
        break;
      case SplayDirections.RIGHT:
        // remove resource spaces 3, 4
        if (coveringCard.resourceSpace3) {
          updatedResourceTotals[coveringCard.resourceSpace3] -= 1;
        }
        if (coveringCard.resourceSpace4) {
          updatedResourceTotals[coveringCard.resourceSpace4] -= 1;
        }
        break;
      case SplayDirections.UP:
        // remove resource space 1
        if (coveringCard.resourceSpace1) {
          updatedResourceTotals[coveringCard.resourceSpace1] -= 1;
        }
        break;
      default:
        // remove all resources
        updatedResourceTotals[Resources.CASTLES] -= coveringCard.numCastles;
        updatedResourceTotals[Resources.CROWNS] -= coveringCard.numCrowns;
        updatedResourceTotals[Resources.FACTORIES] -= coveringCard.numFactories;
        updatedResourceTotals[Resources.LEAVES] -= coveringCard.numLeaves;
        updatedResourceTotals[Resources.LIGHTBULBS] -= coveringCard.numLightbulbs;
        updatedResourceTotals[Resources.TIMEPIECES] -= coveringCard.numTimepieces;
    }
  }
  // add resources for card being melded
  updatedResourceTotals[Resources.CASTLES] += meldingCard.numCastles;
  updatedResourceTotals[Resources.CROWNS] += meldingCard.numCrowns;
  updatedResourceTotals[Resources.FACTORIES] += meldingCard.numFactories;
  updatedResourceTotals[Resources.LEAVES] += meldingCard.numLeaves;
  updatedResourceTotals[Resources.LIGHTBULBS] += meldingCard.numLightbulbs;
  updatedResourceTotals[Resources.TIMEPIECES] += meldingCard.numTimepieces;
  return updatedResourceTotals;
};

export const calculateTotalResourcesForCards = (cardIds: CardIds[]) => {
  const resourcesPerCard = cardIds.map(createCardResources);
  return combineResourceTotals(...resourcesPerCard);
};

export const calculateTotalResourcesForBoard = (board: TBoard) => {
  return Object.values(board).reduce((acc: TResourceTotals, color: IBoardPile) => {
    const totalResourcesForColor = color.cards.map(createCardResources);
    return combineResourceTotals(acc, ...totalResourcesForColor);
  }, createInitialResourceTotals());
};

interface IUpdateResourceTotalsWhenTuckingProps {
  isEmptyPile?: boolean;
  resourceTotals: TResourceTotals;
  splayDirection: SplayDirections | null;
  tuckingCardId: CardIds;
}
export const updateResourceTotalsWhenTucking = ({
  isEmptyPile = false,
  resourceTotals,
  splayDirection = null,
  tuckingCardId,
}: IUpdateResourceTotalsWhenTuckingProps) => {
  const tuckingCard = getCardById(tuckingCardId);
  // only add resources for tucking card if the
  // current pile is empty or the pile is splayed
  if (!tuckingCard || (!isEmptyPile && !splayDirection)) {
    return null;
  }
  const updatedResourceTotals = { ...resourceTotals };
  switch (splayDirection) {
    case SplayDirections.LEFT:
      // add resource space 4
      if (tuckingCard.resourceSpace4) {
        updatedResourceTotals[tuckingCard.resourceSpace4] += 1;
      }
      break;
    case SplayDirections.RIGHT:
      // add resource spaces 1, 2
      if (tuckingCard.resourceSpace1) {
        updatedResourceTotals[tuckingCard.resourceSpace1] += 1;
      }
      if (tuckingCard.resourceSpace2) {
        updatedResourceTotals[tuckingCard.resourceSpace2] += 1;
      }
      break;
    case SplayDirections.UP:
      // add resource space 2, 3, 4
      if (tuckingCard.resourceSpace2) {
        updatedResourceTotals[tuckingCard.resourceSpace2] += 1;
      }
      if (tuckingCard.resourceSpace3) {
        updatedResourceTotals[tuckingCard.resourceSpace3] += 1;
      }
      if (tuckingCard.resourceSpace4) {
        updatedResourceTotals[tuckingCard.resourceSpace4] += 1;
      }
      break;
    default:
      // assumes this hit bc it is an empty pile
      // so we should add all resources
      updatedResourceTotals[Resources.CASTLES] += tuckingCard.numCastles;
      updatedResourceTotals[Resources.CROWNS] += tuckingCard.numCrowns;
      updatedResourceTotals[Resources.FACTORIES] += tuckingCard.numFactories;
      updatedResourceTotals[Resources.LEAVES] += tuckingCard.numLeaves;
      updatedResourceTotals[Resources.LIGHTBULBS] += tuckingCard.numLightbulbs;
      updatedResourceTotals[Resources.TIMEPIECES] += tuckingCard.numTimepieces;
  }
  return updatedResourceTotals;
};
