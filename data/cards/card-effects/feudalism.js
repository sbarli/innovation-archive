const feudalism = [
  {
    description:
      'I DEMAND you transfer a card with a Castle from your hand to my hand! If you do, unsplay that color of your cards!',
    effectTypes: ['transfer', 'unsplay'],
    isDemand: true,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'You may splay your yellow or purple cards left.',
    effectTypes: ['splay'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { feudalism };

  