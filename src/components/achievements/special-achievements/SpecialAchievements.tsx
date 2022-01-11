import React from 'react';

import { SpecialAchievements as SpecialAchievementsEnum } from '../../../enums';
import { TSpecialAchievements } from '../../../types';

interface ISpecialAchievementsProps {
  specialAchievements: TSpecialAchievements;
}

export function SpecialAchievements({ specialAchievements }: ISpecialAchievementsProps) {
  if (!Object.keys(specialAchievements).length) {
    return null;
  }

  return (
    <div data-testid="special-achievements">
      <h4>Special Achievements</h4>
      {Object.keys(specialAchievements)
        .map(specialAchievementName => {
          if (specialAchievements[(specialAchievementName as unknown) as SpecialAchievementsEnum]) {
            return (
              <p
                key={specialAchievementName}
                data-testid={`special-achievement-${specialAchievementName}`}
              >
                {specialAchievementName} Achievement
              </p>
            );
          }
          return null;
        })
        .filter(ach => !!ach)}
    </div>
  );
}
