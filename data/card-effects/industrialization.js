const industrialization = [
  {
    description: 'Draw and tuck a 6 for every color on your board with one or more Factories.',
    effectTypes: ['draw', 'tuck'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'You may splay your red or purple cards right.',
    effectTypes: ['splay'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { industrialization };

  