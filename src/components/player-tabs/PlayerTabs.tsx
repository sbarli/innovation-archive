import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { useAppSelector } from '../../hooks/use-app-selector';
import { TabsPanel } from '../../libs/ui/tabs-panel';
import { selectCurrentPlayerId, selectPlayers } from '../../state/playersSlice';
import { CurrentPlayerView } from '../current-player-view';
import { OpponentPlayerView } from '../opponent-player-view';

import { PlayerTabItem } from './player-tab-item';

const PlayerTabsWrapper = styled.div``;

export const PlayerTabs = () => {
  const allPlayers = useAppSelector(selectPlayers);
  const currentPlayer = useAppSelector(selectCurrentPlayerId);

  const [currentTab, setCurrentTab] = useState<string>('');

  const onTabClick = useCallback(newTab => {
    setCurrentTab(newTab);
  }, []);

  // set first tab
  useEffect(() => {
    if (!currentTab && currentPlayer) {
      setCurrentTab(currentPlayer);
    }
  }, [currentTab, currentPlayer]);

  // update tab when current player changes
  useEffect(() => {
    if (currentPlayer) {
      setCurrentTab(currentPlayer);
    }
  }, [currentPlayer]);

  if (!currentTab) {
    return null;
  }

  const tabItemsData = Object.values(allPlayers).map(player => ({
    id: player.id,
    name: (
      <PlayerTabItem
        isCurrentPlayer={player.id === currentPlayer}
        isSelectedTab={player.id === currentTab}
        name={player.name}
      />
    ),
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
