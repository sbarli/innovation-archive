import React from 'react';

import { Ages } from '../../../enums';
import { Collapse } from '../../../libs/ui/collapse';
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
      if (ageAchievements[Number(ageKey) as Ages].isAvailable) {
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
      <Collapse header="Age Achievements" headerSize={4} showCaret={false}>
        {AgeAchievementComponents.length ? (
          AgeAchievementComponents
        ) : (
          <p>No More Age Achievements</p>
        )}
      </Collapse>
    </div>
  );
}
