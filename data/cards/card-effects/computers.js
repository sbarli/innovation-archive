const computers = [
  {
    description: 'You may splay your red cards or your green cards up.',
    effectTypes: ['splay'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description:
      'Draw and meld a 10, then execute each of its non-demand dogma effects. Do not share them.',
    effectTypes: ['draw', 'meld', 'execute'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { computers };

  