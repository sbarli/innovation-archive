const enterprise = [
  {
    description:
      'I DEMAND you transfer a top non-purple card with a Crown from your board to my board! If you do, draw and meld a 4!',
    effectTypes: ['transfer', 'draw', 'meld'],
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

  
  module.exports = { enterprise };

  