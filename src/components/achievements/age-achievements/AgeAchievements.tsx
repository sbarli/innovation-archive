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

  return (
    <div data-testid="age-achievements">
      <h4>Age Achievements</h4>
      {Object.keys(ageAchievements)
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
        .filter(ach => !!ach)}
    </div>
  );
}
