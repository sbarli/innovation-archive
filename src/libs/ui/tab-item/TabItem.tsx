import React from 'react';
import styled from 'styled-components/macro';

import { ITab } from '../types/tabs';

const TabItemWrapper = styled.div<{ isActiveTab: boolean }>`
  color: ${p => (p.isActiveTab ? 'green' : 'black')};
`;

interface ITabItemProps extends ITab {
  isActiveTab: boolean;
  onClick: () => void;
}

export const TabItem = ({ id, isActiveTab, name, onClick }: ITabItemProps) => {
  return (
    <TabItemWrapper data-testid={`tab-item-${id}`} isActiveTab={isActiveTab} onClick={onClick}>
      {name}
    </TabItemWrapper>
  );
};
