export const machinery = [
  {
    description:
      'I DEMAND you exchange all the cards in your hand with all the highest cards in my hand!',
    effectTypes: ['exchange'],
    isDemand: true,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'Score a card from your hand with a Castle. You may splay your red cards left.',
    effectTypes: ['score', 'splay'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
