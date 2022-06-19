const metricSystem = [
  {
    description:
      'If your green cards are splayed right, you may splay any one color of your cards right.',
    effectTypes: ['splay'],
    isDemand: false,
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

  
  module.exports = { metricSystem };

  