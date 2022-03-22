export const software = [
  {
    description: 'Draw and score a 10.',
    effectTypes: ['draw', 'score'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description:
      "Draw and meld two 10's, then execute each of the second card's non-demand dogma effects. Do not share them.",
    effectTypes: ['draw', 'meld', 'execute'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
