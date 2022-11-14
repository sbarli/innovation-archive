import React from 'react';

import { useAppSelector } from '../../hooks/use-app-selector';
import { selectAgeAchievements, selectSpecialAchievements } from '../../state/selectors';

import { AgeAchievements } from './age-achievements';
import { SpecialAchievements } from './special-achievements';

export function Achievements() {
  const ageAchievements = useAppSelector(selectAgeAchievements);
  const specialAchievements = useAppSelector(selectSpecialAchievements);

  return (
    <div data-testid="achievements">
      <h3>Achievements</h3>
      <AgeAchievements ageAchievements={ageAchievements} />
      <SpecialAchievements specialAchievements={specialAchievements} />
    </div>
  );
}
