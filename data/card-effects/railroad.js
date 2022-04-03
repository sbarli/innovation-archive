const railroad = [
  {
    description: "Return all cards from your hand, then draw three 6's.",
    effectTypes: ['return', 'draw'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'You may splay up any one color of your cards currently splayed right.',
    effectTypes: ['splay'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { railroad };

  