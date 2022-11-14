import React from 'react';
import styled, { css } from 'styled-components/macro';

const tabTransition = css`
  transition: transform 0.45s;
`;

const TabContentWrapper = styled.div<{ isFirstTabContent: boolean; totalTabs: number }>`
  position: absolute;
  height: 100%;
  display: flex;
  transform: translateX(${p => (p.isFirstTabContent ? 0 : `-${p.totalTabs * 300}px`)});
  ${tabTransition}
  padding: 10px;
  color: white;
`;

interface ITabContentProps {
  isFirstTabContent: boolean;
  totalTabs: number;
}

export const TabContent = ({ isFirstTabContent, totalTabs }: ITabContentProps) => {
  return (
    <TabContentWrapper
      data-testid="tab-content"
      isFirstTabContent={isFirstTabContent}
      totalTabs={totalTabs}
    ></TabContentWrapper>
  );
};
