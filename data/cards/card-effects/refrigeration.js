const refrigeration = [
  {
    description: 'I DEMAND you return half (rounded down) of the cards in your hand!',
    effectTypes: ['return'],
    isDemand: true,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'You may score a card from your hand.',
    effectTypes: ['score'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { refrigeration };

  