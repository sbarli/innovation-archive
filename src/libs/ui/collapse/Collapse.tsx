import React, { useState } from 'react';
import styled from 'styled-components/macro';

const CollapseWrapper = styled.div``;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Caret = styled.div`
  height: 100%;
  width: 2rem;
  margin-right: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

const CaretIcon = styled.span<{ $isOpen: boolean }>(
  ({ $isOpen }) => `
  border-top: 1rem solid transparent;
  border-bottom: 1rem solid transparent;
  border-left: 1rem dashed;
  margin-right: 5px;
  margin-top: -4px;
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 5px;
  vertical-align: middle;
  ${$isOpen ? 'transform: rotate(90deg);' : ''}
  transition-timing-function: ease-in-out;
  transition-duration: 0.15s;
  transition-property: transform;
  transition-delay: 0.1s;
`
);

const detailsOpenStyles = `
  max-height: 100%;
  opacity: 1;
`;

const detailsClosedStyles = `
  max-height: 0;
  overflow: hidden;
  opacity: 0;
`;

const Details = styled.div<{ $isOpen: boolean }>(
  ({ $isOpen }) => `
  ${$isOpen ? detailsOpenStyles : detailsClosedStyles}
  transition-timing-function: linear, ease;
  transition-duration: 0.15s;
  transition-property: opacity, max-height;
  transition-delay: 0.1s;
`
);

const headerWithCaretStyles = `
  margin: 0;
`;

const headerNoCaretStyles = `
  margin: auto;
`;

const headerSharedStyles = `
  &:hover {
    cursor: pointer;
  }
`;

const HeaderThree = styled.h3<{ $showCaret: boolean }>(
  ({ $showCaret }) => `
  ${headerSharedStyles}
  ${$showCaret ? headerWithCaretStyles : headerNoCaretStyles}
`
);

const HeaderFour = styled.h4<{ $showCaret: boolean }>(
  ({ $showCaret }) => `
  ${headerSharedStyles}
  ${$showCaret ? headerWithCaretStyles : headerNoCaretStyles}
`
);

interface ICollapseProps {
  children: any;
  header: string;
  headerSize?: 3 | 4;
  shouldDefaultOpen?: boolean;
  showCaret?: boolean;
}

export const Collapse = ({
  children,
  header,
  headerSize = 3,
  shouldDefaultOpen = false,
  showCaret = true,
}: ICollapseProps) => {
  const [open, setOpen] = useState(shouldDefaultOpen);

  return (
    <CollapseWrapper>
      <Row onClick={() => setOpen(!open)}>
        {showCaret ? (
          <Caret>
            <CaretIcon $isOpen={open} />
          </Caret>
        ) : null}
        {headerSize === 3 ? (
          <HeaderThree $showCaret={showCaret}>{header}</HeaderThree>
        ) : (
          <HeaderFour $showCaret={showCaret}>{header}</HeaderFour>
        )}
      </Row>
      <Details $isOpen={open}>{children}</Details>
    </CollapseWrapper>
  );
};
