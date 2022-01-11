import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import { AgeAchievements } from './age-achievements';
import { SpecialAchievements } from './special-achievements';

export function Achievements() {
  const ageAchievements = useSelector((state: RootState) => state.achievements.ageAchievements);
  const specialAchievements = useSelector(
    (state: RootState) => state.achievements.specialAchievements
  );

  return (
    <div data-testid="achievements">
      <h3>Achievements</h3>
      <AgeAchievements ageAchievements={ageAchievements} />
      <SpecialAchievements specialAchievements={specialAchievements} />
    </div>
  );
}
