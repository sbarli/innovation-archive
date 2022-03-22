export const specialization = [
  {
    description:
      "Reveal a card from your hand. Take into your hand the top card of that color from all opponents' boards.",
    effectTypes: ['reveal', 'transfer'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'You may splay your yellow or blue cards up.',
    effectTypes: ['splay'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
