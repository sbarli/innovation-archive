export const combustion = [
  {
    description:
      'I DEMAND you transfer one card from your score pile to my score pile for every four Crowns on my board!',
    effectTypes: ['transfer', 'score'],
    isDemand: true,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'Return your bottom red card.',
    effectTypes: ['return'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
