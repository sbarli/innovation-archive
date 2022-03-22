export const printingPress = [
  {
    description:
      'You may return a card from your score pile. If you do, draw a card of value two higher than the top purple card on your board.',
    effectTypes: ['return', 'draw'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'You may splay your blue cards right.',
    effectTypes: ['splay'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
