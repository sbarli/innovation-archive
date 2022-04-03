const banking = [
  {
    description:
      'I DEMAND you transfer a top non-green card with a Factory from your board to my board. If you do, draw and score a 5!',
    effectTypes: ['transfer', 'draw', 'score'],
    isDemand: true,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'You may splay your green cards right.',
    effectTypes: ['splay'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { banking };

  