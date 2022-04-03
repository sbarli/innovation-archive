const chemistry = [
  {
    description: 'You may splay your blue cards right.',
    effectTypes: ['splay'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description:
      'Draw and score a card of value one higher than the highest top card on your board and then return a card from your score pile.',
    effectTypes: ['draw', 'score', 'return'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { chemistry };

  