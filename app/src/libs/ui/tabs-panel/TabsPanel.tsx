import React from 'react';
import styled from 'styled-components/macro';

import { TabItem } from '../tab-item';
import { ITab } from '../types/tabs';

const TabsPanelWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

interface ITabsPanelProps {
  activeTab: string;
  onTabClick: (tabId: string | number) => void;
  tabs: ITab[];
}

export const TabsPanel = ({ activeTab, onTabClick, tabs }: ITabsPanelProps) => {
  const TabItems = tabs.map(tab => (
    <TabItem
      key={tab.id}
      id={tab.id}
      isActiveTab={tab.id === activeTab}
      name={tab.name}
      onClick={() => onTabClick(tab.id)}
    />
  ));
  return <TabsPanelWrapper data-testid="tabs-panel">{TabItems}</TabsPanelWrapper>;
};
