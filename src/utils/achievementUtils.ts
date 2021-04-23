const basePlayerAchievements = Object.freeze({
  ageAchievements: [],
  specialAchievements: [],
  totalAchievements: 0,
});

export const createInitialPlayerAchievements = () => ({ ...basePlayerAchievements });
