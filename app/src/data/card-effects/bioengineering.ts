export const bioengineering = [
  {
    description: "Transfer a top card with a Leaf from any opponent's board to your score pile.",
    effectTypes: ['transfer'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description:
      'If any player has fewer than three Leaves on their board, the player with the most Leaves on their board wins.',
    effectTypes: ['end'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
