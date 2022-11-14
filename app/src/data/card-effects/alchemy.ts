export const alchemy = [
  {
    description:
      'Draw and reveal a 4 for every three Castles on your board. If any of the drawn cards are red, return the cards drawn and all cards in your hand.  Otherwise, keep them.',
    effectTypes: ['draw', 'reveal', 'return'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'Meld a card from your hand, then score a card from your hand.',
    effectTypes: ['meld', 'score'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
