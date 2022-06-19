export const emancipation = [
  {
    description:
      'I DEMAND you transfer a card from your hand to my score pile! If you do, draw a 6!',
    effectTypes: ['transfer', 'score', 'draw'],
    isDemand: true,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'You may splay your red or purple cards to the right.',
    effectTypes: ['splay'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
