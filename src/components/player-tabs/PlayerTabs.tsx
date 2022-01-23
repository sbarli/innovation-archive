import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { useAppSelector } from '../../hooks/use-app-selector';
import { TabsPanel } from '../../libs/ui/tabs-panel';
import { selectCurrentPlayerId, selectPlayers } from '../../state/playersSlice';
import { CurrentPlayerView } from '../current-player-view';
import { OpponentPlayerView } from '../opponent-player-view';

const PlayerTabsWrapper = styled.div`
  max-width: 720px;
  margin: auto;
`;

export const PlayerTabs = () => {
  const allPlayers = useAppSelector(selectPlayers);
  const currentPlayer = useAppSelector(selectCurrentPlayerId);

  const [currentTab, setCurrentTab] = useState<string>('');

  const onTabClick = useCallback(newTab => {
    setCurrentTab(newTab);
  }, []);

  useEffect(() => {
    if (!currentTab && currentPlayer) {
      setCurrentTab(currentPlayer);
    }
  }, [currentTab, currentPlayer]);

  if (!currentTab) {
    return null;
  }

  const tabItemsData = Object.values(allPlayers).map(player => ({
    id: player.id,
    name: player.id === currentPlayer ? `${player.name} ✅` : player.name,
  }));

  const TabContent =
    currentTab === currentPlayer ? (
      <CurrentPlayerView player={currentTab} />
    ) : (
      <OpponentPlayerView player={currentTab} />
    );

  return (
    <PlayerTabsWrapper data-testid="player-tabs">
      <TabsPanel activeTab={currentTab} onTabClick={onTabClick} tabs={tabItemsData} />
      {TabContent}
    </PlayerTabsWrapper>
  );
};
