const collaboration = [
  {
    description:
      "I DEMAND you draw two 9's and reveal them! Transfer the card of my choice to my board, and meld the other!",
    effectTypes: ['draw', 'reveal', 'transfer', 'meld'],
    isDemand: true,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'If you have ten or more green cards on your board, you win.',
    effectTypes: ['end'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { collaboration };

  