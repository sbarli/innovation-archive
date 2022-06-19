const engineering = [
  {
    description:
      'I DEMAND you transfer all top cards with a Castle from your board to my score pile!',
    effectTypes: ['transfer', 'score'],
    isDemand: true,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'You may splay your red cards left.',
    effectTypes: ['splay'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { engineering };

  