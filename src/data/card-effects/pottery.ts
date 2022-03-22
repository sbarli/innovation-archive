export const pottery = [
  {
    description:
      'You may return up to three cards from your hand. If you returned any cards, draw and score a card of value equal to the number of cards you returned.',
    effectTypes: ['return', 'draw', 'score'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'Draw a 1.',
    effectTypes: ['draw'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
