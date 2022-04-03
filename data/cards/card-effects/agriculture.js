const agriculture = [
  {
    description:
      'You may return a card from your hand. If you do, draw and score a card of value one higher than the card you returned.',
    effectTypes: ['return', 'draw', 'score'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { agriculture };

  