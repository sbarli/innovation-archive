import React from 'react';
import styled from 'styled-components/macro';

const TabsPanelWrapper = styled.div``;

interface ITabsPanelProps {}

export const TabsPanel = ({}: ITabsPanelProps) => {
  return <TabsPanelWrapper data-testid="tabs-panel"></TabsPanelWrapper>;
};
