const mapmaking = [
  {
    description: 'I DEMAND you transfer a 1 from your score pile, if it has any, to my score pile!',
    effectTypes: ['transfer', 'score'],
    isDemand: true,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
  {
    description: 'If any card was transferred due to the demand, draw and score a 1.',
    effectTypes: ['draw', 'score'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { mapmaking };

  