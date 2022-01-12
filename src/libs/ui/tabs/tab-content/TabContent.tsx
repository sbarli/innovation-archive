import React from 'react';
import styled from 'styled-components/macro';

const TabContentWrapper = styled.div``;

interface ITabContentProps {}

export const TabContent = ({}: ITabContentProps) => {
  return <TabContentWrapper data-testid="tab-content"></TabContentWrapper>;
};
