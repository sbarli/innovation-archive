import { Ages, BASE_AGE_ACHIEVEMENTS, CardIds } from '../enums';
import { TAgeAchievements, TCardIdsByAge } from '../types';

type TAgeAchievementCardIdsByAge = {
  [key in Ages]: CardIds | undefined;
};

const basePlayerAchievements = Object.freeze({
  ageAchievements: [],
  specialAchievements: [],
  totalAchievements: 0,
});

export const createInitialPlayerAchievements = () => ({ ...basePlayerAchievements });

export const createInitialAgeAchievements = (achievementsByAge: TAgeAchievementCardIdsByAge) => {
  const ageAchievements: TAgeAchievements = { ...BASE_AGE_ACHIEVEMENTS };
  Object.keys(achievementsByAge).forEach(key => {
    const age = Number(key) as Ages;
    const card = achievementsByAge[age];
    ageAchievements[age] = { ...ageAchievements[age], card };
  });
  return ageAchievements;
};

export const pullAgeAchievementsFromStarterDeck = (starterDeck: TCardIdsByAge) => {
  // pull out age achievement cards
  // NOTE: purposely mutates starterDeck
  const ageAchievements = Object.keys(starterDeck).reduce((acc, key) => {
    const age = Number(key) as Ages;
    acc[age] = starterDeck[age].pop();
    return acc;
  }, {} as TAgeAchievementCardIdsByAge);
  return ageAchievements;
};

interface ICheckIfPlayerCanAchieveProps {
  ageAchievements: TAgeAchievements;
  playerAge: Ages;
  playerScore: number;
}

export const checkIfPlayerCanAchieve = ({
  ageAchievements,
  playerAge,
  playerScore,
}: ICheckIfPlayerCanAchieveProps) => {
  const playerAgeAchievementData = ageAchievements[playerAge];

  const playerCanAchieve =
    playerAgeAchievementData.isAvailable && playerScore >= playerAgeAchievementData.cost;

  return playerCanAchieve;
};
