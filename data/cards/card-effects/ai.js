const ai = [
  {
    description: 'Draw and score a 10.',
    effectTypes: ['draw', 'score'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description:
      'If Robotics and Software are top cards on any board, the single player with the lowest score wins.',
    effectTypes: ['end'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { ai };

  