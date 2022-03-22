export const invention = [
  {
    description:
      'You may splay right any one color of your cards currently splayed left. If you do, draw and score a 4.',
    effectTypes: ['splay', 'draw', 'score'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description:
      'If you have five colors, each splayed in any direction, claim the Wonder achievement',
    effectTypes: ['achieve'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: 'Wonder',
    dogma: () => {},
  },
];
