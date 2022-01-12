import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { TabsPanel } from '../../libs/ui/tabs-panel';
import { selectCurrentPlayer, selectPlayers } from '../../state/playersSlice';
import { CurrentPlayerView } from '../current-player-view';
import { OpponentPlayerView } from '../opponent-player-view';

const PlayerTabsWrapper = styled.div`
  max-width: 720px;
  margin: auto;
`;

export const PlayerTabs = () => {
  const allPlayers = useSelector(selectPlayers);
  const currentPlayer = useSelector(selectCurrentPlayer);

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

  const TabContent = currentTab === currentPlayer ? CurrentPlayerView : OpponentPlayerView;

  return (
    <PlayerTabsWrapper data-testid="player-tabs">
      <TabsPanel activeTab={currentTab} onTabClick={onTabClick} tabs={tabItemsData} />
      <TabContent player={currentTab} />
    </PlayerTabsWrapper>
  );
};
