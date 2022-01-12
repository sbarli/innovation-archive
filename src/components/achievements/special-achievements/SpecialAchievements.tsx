import React from 'react';

import { SpecialAchievements as SpecialAchievementsEnum } from '../../../enums';
import { Collapse } from '../../../libs/ui/collapse';
import { TSpecialAchievements } from '../../../types';

interface ISpecialAchievementsProps {
  specialAchievements: TSpecialAchievements;
}

export function SpecialAchievements({ specialAchievements }: ISpecialAchievementsProps) {
  if (!Object.keys(specialAchievements).length) {
    return null;
  }

  const SpecialAchievementComponents = Object.keys(specialAchievements)
    .map(specialAchievementName => {
      if (specialAchievements[specialAchievementName as SpecialAchievementsEnum]) {
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
    .filter(ach => !!ach);

  return (
    <div data-testid="special-achievements">
      <Collapse header="Special Achievements" headerSize={4} showCaret={false}>
        {SpecialAchievementComponents.length ? (
          SpecialAchievementComponents
        ) : (
          <p>No More Special Achievements</p>
        )}
      </Collapse>
    </div>
  );
}
