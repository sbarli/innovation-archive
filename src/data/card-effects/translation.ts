export const translation = [
  {
    description:
      'You may meld all the cards in your score pile. If you meld one, you must meld them all.',
    effectTypes: ['meld'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'If each top card on your board has a Crown, claim the World achievement.',
    effectTypes: ['achieve'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: 'World',
    dogma: () => {},
  },
];
