const antibiotics = [
  {
    description:
      "You may return up to three cards from your hand. For every different value of card that you returned, draw two 8's.",
    effectTypes: ['return', 'draw'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { antibiotics };

  