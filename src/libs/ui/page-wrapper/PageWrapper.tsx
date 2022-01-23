import React from 'react';
import styled from 'styled-components/macro';

import { IBaseProps } from '../types';

const StyledPageWrapper = styled.div``;

export const PageWrapper = ({ children }: IBaseProps) => {
  return <StyledPageWrapper data-testid="page-wrapper">{children}</StyledPageWrapper>;
};
