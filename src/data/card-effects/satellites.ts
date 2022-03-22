export const satellites = [
  {
    description: "Return all cards from your hand, and draw three 8's.",
    effectTypes: ['return', 'draw'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'You may splay your purple cards up.',
    effectTypes: ['splay'],
    isDemand: false,
    isOptional: true,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description:
      'Meld a card from your hand and then execute each of its non-demand dogma effects. Do not share them.',
    effectTypes: ['meld', 'execute'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
