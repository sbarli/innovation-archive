export const fission = [
  {
    description:
      'I DEMAND you draw a 10! If it is red, remove all hands, boards, and score piles from the game! If this occurs, the dogma action is complete.',
    effectTypes: ['draw', 'remove'],
    isDemand: true,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: "Return a top card other than Fission from any player's board. Draw a 10.",
    effectTypes: ['return', 'draw'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];
