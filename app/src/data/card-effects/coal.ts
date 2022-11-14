export const coal = [
  {
    description: 'Draw and tuck a 5.',
    effectTypes: ['draw', 'tuck'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'You may splay your red cards right.',
    effectTypes: ['splay'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description:
      'You may score any one of your top cards. If you do, also score the card beneath it.',
    effectTypes: ['score'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
