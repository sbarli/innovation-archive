import React from 'react';

import { Resources } from '../../enums';
import { Collapse } from '../../libs/ui/collapse';
import { TResourceTotals } from '../../types';

export function ResourceTotals({ resourceTotals }: { resourceTotals: TResourceTotals }) {
  return (
    <div data-testid="player-resource-totals">
      <Collapse header="Resource Totals" headerSize={4} showCaret={false}>
        <ul>
          <li>
            {Resources.CROWNS.toLocaleUpperCase()}: {resourceTotals[Resources.CROWNS]}
          </li>
          <li>
            {Resources.LEAVES.toLocaleUpperCase()}: {resourceTotals[Resources.LEAVES]}
          </li>
          <li>
            {Resources.LIGHTBULBS.toLocaleUpperCase()}: {resourceTotals[Resources.LIGHTBULBS]}
          </li>
          <li>
            {Resources.CASTLES.toLocaleUpperCase()}: {resourceTotals[Resources.CASTLES]}
          </li>
          <li>
            {Resources.FACTORIES.toLocaleUpperCase()}: {resourceTotals[Resources.FACTORIES]}
          </li>
          <li>
            {Resources.TIMEPIECES.toLocaleUpperCase()}: {resourceTotals[Resources.TIMEPIECES]}
          </li>
        </ul>
      </Collapse>
    </div>
  );
}
