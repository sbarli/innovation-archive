export const construction = [
  {
    description: 'I DEMAND you transfer two cards from your hand to my hand! Draw a 2!',
    effectTypes: ['transfer', 'draw'],
    isDemand: true,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'If you are the only player with five top cards, claim the Empire achievement.',
    effectTypes: ['achieve'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: 'Empire',
    dogma: () => {},
  },
];
