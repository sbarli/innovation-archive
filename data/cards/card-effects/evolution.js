const evolution = [
  {
    description:
      'You may choose to either draw and score an 8 and then return a card from your score pile, or draw a card of value one higher than the highest card in your score pile.',
    effectTypes: ['draw', 'score', 'draw'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { evolution };

  