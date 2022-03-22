export const clothing = [
  {
    description: 'Meld a card from your hand of a different color from any card on your board.',
    effectTypes: ['meld'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description:
      "Draw and score a 1 for each color present on your board not present on any opponent's board.",
    effectTypes: ['draw', 'score'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
