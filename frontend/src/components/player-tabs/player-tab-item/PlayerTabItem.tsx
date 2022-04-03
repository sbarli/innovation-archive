import React from 'react';
import styled, { css } from 'styled-components/macro';

const selectedStyles = css`
  color: var(--color-primary-medium);
  font-weight: var(--font-weight-bold);
`;

const PlayerTabItemWrapper = styled.div`
  font-size: var(--font-size-lg);
`;

const CurrentPlayerName = styled.span<{ isSelectedTab: boolean }>`
  color: 'var(--color-primary-dark)';

  ${p => (p.isSelectedTab ? selectedStyles : '')}
`;

const CurrentPlayerIcon = styled.span`
  padding-right: 0.5rem;
`;

export const PlayerTabItem = ({
  isCurrentPlayer,
  isSelectedTab,
  name,
}: {
  isCurrentPlayer: boolean;
  isSelectedTab: boolean;
  name: string;
}) => {
  return (
    <PlayerTabItemWrapper data-testid="player-tabs">
      {isCurrentPlayer ? (
        // eslint-disable-next-line jsx-a11y/accessible-emoji
        <CurrentPlayerIcon role="img" aria-label="">
          🌟
        </CurrentPlayerIcon>
      ) : (
        ''
      )}
      <CurrentPlayerName isSelectedTab={isSelectedTab}>{name}</CurrentPlayerName>
    </PlayerTabItemWrapper>
  );
};
