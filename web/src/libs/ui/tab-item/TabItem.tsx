import React from 'react';
import styled from 'styled-components/macro';

import { ITab } from '../types/tabs';

const TabItemWrapper = styled.div``;

interface ITabItemProps extends ITab {
  isActiveTab: boolean;
  onClick: () => void;
}

export const TabItem = ({ id, name, onClick }: ITabItemProps) => {
  return (
    <TabItemWrapper data-testid={`tab-item-${id}`} onClick={onClick}>
      {name}
    </TabItemWrapper>
  );
};
