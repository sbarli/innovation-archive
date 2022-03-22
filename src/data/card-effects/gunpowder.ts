export const gunpowder = [
  {
    description: 'I DEMAND you transfer a top card with a Castle from your board to my score pile!',
    effectTypes: ['transfer', 'score'],
    isDemand: true,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'If any card was transferred due to the demand, draw and score a 2.',
    effectTypes: ['draw', 'score'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
