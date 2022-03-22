export const monotheism = [
  {
    description:
      'I DEMAND you transfer a top card on your board of a different color from any card on my board to my score pile! If you do, draw and tuck a 1!',
    effectTypes: ['transfer', 'draw', 'tuck'],
    isDemand: true,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'Draw and tuck a 1.',
    effectTypes: ['draw', 'tuck'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
