export const corporations = [
  {
    description:
      'I DEMAND you transfer a top non-green card with a Factory from your board to my score pile! If you do, draw and meld an 8!',
    effectTypes: ['transfer', 'draw', 'meld'],
    isDemand: true,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'Draw and meld an 8.',
    effectTypes: ['draw', 'meld'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
