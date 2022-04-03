const physics = [
  {
    description:
      "Draw three 6's and reveal them. If two or more of the drawn cards are the same color, return the drawn cards and all other cards in your hand. Otherwise, keep them.",
    effectTypes: ['draw', 'reveal', 'return'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { physics };

  