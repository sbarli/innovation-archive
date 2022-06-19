const miniaturization = [
  {
    description:
      'You may return a card from your hand. If you returned a 10, draw a 10 for every different value of card in your score pile.',
    effectTypes: ['return', 'draw'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { miniaturization };

  