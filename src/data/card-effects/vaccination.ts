export const vaccination = [
  {
    description:
      'I DEMAND you return all of the lowest cards in your score pile! If you returned any, draw and meld a 6!',
    effectTypes: ['return', 'draw', 'meld'],
    isDemand: true,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'If any card was returned as a result of the demand, draw and meld a 7.',
    effectTypes: ['draw', 'meld'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
