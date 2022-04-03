export const oars = [
  {
    description:
      'I DEMAND you transfer a card with a Crown from your hand to my score pile! If you do, draw a 1, and repeat this dogma effect!',
    effectTypes: ['transfer', 'score', 'draw'],
    isDemand: true,
    isOptional: false,
    repeat: true,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'If no cards were transferred due to the demand, draw a 1.',
    effectTypes: ['draw'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
