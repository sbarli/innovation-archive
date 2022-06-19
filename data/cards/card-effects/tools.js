const tools = [
  {
    description: 'You may return three cards from your hand. If you do, draw and meld a 3.',
    effectTypes: ['return', 'draw', 'meld'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: "You may return a 3 from your hand. If you do, draw three 1's.",
    effectTypes: ['return', 'draw'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { tools };

  