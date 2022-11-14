import React from 'react';
import styled from 'styled-components/macro';

import { Resources } from '../../enums';
import { Collapse } from '../../libs/ui/collapse';
import { TResourceTotals } from '../../types';

const ResourceTotalsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
`;

export function ResourceTotals({ resourceTotals }: { resourceTotals: TResourceTotals }) {
  return (
    <div data-testid="player-resource-totals">
      <Collapse header="Resource Totals" headerSize={4} showCaret={false}>
        <ResourceTotalsLayout>
          <p>
            {Resources.CROWNS.toLocaleUpperCase()}: {resourceTotals[Resources.CROWNS]}
          </p>
          <p>
            {Resources.LEAVES.toLocaleUpperCase()}: {resourceTotals[Resources.LEAVES]}
          </p>
          <p>
            {Resources.LIGHTBULBS.toLocaleUpperCase()}: {resourceTotals[Resources.LIGHTBULBS]}
          </p>
          <p>
            {Resources.CASTLES.toLocaleUpperCase()}: {resourceTotals[Resources.CASTLES]}
          </p>
          <p>
            {Resources.FACTORIES.toLocaleUpperCase()}: {resourceTotals[Resources.FACTORIES]}
          </p>
          <p>
            {Resources.TIMEPIECES.toLocaleUpperCase()}: {resourceTotals[Resources.TIMEPIECES]}
          </p>
        </ResourceTotalsLayout>
      </Collapse>
    </div>
  );
}
