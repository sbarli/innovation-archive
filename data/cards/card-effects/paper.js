const paper = [
  {
    description: 'You may splay your green or blue cards left.',
    effectTypes: ['splay'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'Draw a 4 for every color you have splayed left.',
    effectTypes: ['draw'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { paper };

  