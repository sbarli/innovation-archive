import React, { useState } from 'react';
import styled from 'styled-components/macro';

const TabsWrapper = styled.div``;

interface ITabsProps {}

export const Tabs = ({}: ITabsProps) => {
  const [currentTab, setCurrentTab] = useState(0);
  console.log('setCurrentTab: ', setCurrentTab);
  console.log('currentTab: ', currentTab);

  return <TabsWrapper data-testid="tabs"></TabsWrapper>;
};
