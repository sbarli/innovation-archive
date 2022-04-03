const optics = [
  {
    description:
      'Draw and meld a 3. If it has a Crown, draw and score a 4. Otherwise, transfer a card from your score pile to the score pile of an opponent with fewer points than you.',
    effectTypes: ['draw', 'meld', 'score', 'transfer'],
    isDemand: false,
    isOptional: false,
    repeat: false,
    specialAchievement: null,
    dogma: () => {},
  },
];

  
  module.exports = { optics };

  