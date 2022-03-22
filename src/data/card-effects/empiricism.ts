export const empiricism = [
  {
    description:
      'Choose two colors, then draw and reveal a 9. If it is either of the colors you chose, meld it and you may splay your cards of that color up.',
    effectTypes: ['draw', 'reveal', 'meld', 'splay'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'If you have twenty or more Lightbulbs on your board, you win.',
    effectTypes: ['end'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
