export const globalization = [
  {
    description: 'I DEMAND you return a top card with a Leaf on your board!',
    effectTypes: ['return'],
    isDemand: true,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description:
      'Draw and score a 6. If no player has more Leaves than Factories on their board, the single player with the highest score wins.',
    effectTypes: ['draw', 'score', 'end'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
