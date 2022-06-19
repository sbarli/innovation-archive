const perspective = [
  {
    description:
      'You may return a card from your hand. If you do, score a card from your hand for every two Lightbulbs on your board.',
    effectTypes: ['return', 'score'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { perspective };

  