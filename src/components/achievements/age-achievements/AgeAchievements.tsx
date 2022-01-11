import React from 'react';

import { Ages } from '../../../enums';
import { TAgeAchievements } from '../../../types';

interface IAgeAchievementsProps {
  ageAchievements: TAgeAchievements;
}

export function AgeAchievements({ ageAchievements }: IAgeAchievementsProps) {
  if (!Object.keys(ageAchievements).length) {
    return null;
  }

  const AgeAchievementComponents = Object.keys(ageAchievements)
    .map(ageKey => {
      if (ageAchievements[(ageKey as unknown) as Ages] !== undefined) {
        return (
          <p key={ageKey} data-testid={`age-${ageKey}-achievement`}>
            Age {ageKey} Achievement
          </p>
        );
      }
      return null;
    })
    .filter(ach => !!ach);

  return (
    <div data-testid="age-achievements">
      <h4>Age Achievements</h4>
      {AgeAchievementComponents.length ? AgeAchievementComponents : <p>No More Age Achievements</p>}
    </div>
  );
}
