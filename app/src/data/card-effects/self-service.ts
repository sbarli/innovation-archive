export const selfService = [
  {
    description:
      'Execute each of the non-demand dogma effects of any other top card on your board. Do not share them.',
    effectTypes: ['execute'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'If you have more achievements than each opponent, you win.',
    effectTypes: ['end'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
