import React from 'react';
import styled from 'styled-components/macro';

import { IBaseProps } from '../types';

const StyledPageWrapper = styled.div`
  height: 100%;
  margin: 1rem 3rem;
`;

export const PageWrapper = ({ children, ...props }: IBaseProps) => {
  return <StyledPageWrapper {...props}>{children}</StyledPageWrapper>;
};
