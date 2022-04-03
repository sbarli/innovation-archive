import { SpecialAchievements } from '../../enums';

export const astronomy = [
  {
    description:
      'Draw and reveal a 6. If the card is green or blue, meld it and repeat this dogma effect.',
    effectTypes: ['draw', 'reveal', 'meld'],
    isDemand: false,
    isOptional: false,
    repeat: true,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description:
      'If all non-purple top cards on your board are value 6 or higher, claim the Universe achievement.',
    effectTypes: ['achieve'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: SpecialAchievements.UNIVERSE,
    dogma: () => {},
  },
];
