export const thePirateCode = [
  {
    description:
      'I DEMAND you transfer two cards of value 4 or less from your score pile to my score pile! ',
    effectTypes: ['transfer', 'score'],
    isDemand: true,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description:
      'If any cards were transferred due to the demand, score the lowest top card with a Crown from your board.',
    effectTypes: ['score'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
