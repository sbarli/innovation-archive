export const democracy = [
  {
    description:
      'You may return any number of cards from your hand. If you have returned more cards than any opponent due to Democracy so far during this dogma action, draw and score an 8.',
    effectTypes: ['return', 'draw', 'score'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
