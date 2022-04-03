const classification = [
  {
    description:
      "Reveal the color of a card from your hand. Take into your hand all the cards of that color from all opponent's hands. Then, meld all cards of that color from your hand.",
    effectTypes: ['reveal', 'transfer', 'meld'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { classification };

  