const cityStates = [
  {
    description:
      'I DEMAND you transfer a top card with a Castle from your board to my board if you have at least four Castles on your board! If you do, draw a 1.',
    effectTypes: ['transfer', 'draw'],
    isDemand: true,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { cityStates };

  