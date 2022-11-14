import { SpecialAchievements } from '../../enums';

export const masonry = [
  {
    description:
      'You may meld any number of cards from your hand, each with a Castle. If you melded four or more cards in this way, claim the Monument achievement.',
    effectTypes: ['meld', 'achieve'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: SpecialAchievements.MONUMENT,
    dogma: () => {},
  },
];
