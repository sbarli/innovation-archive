import React from 'react';
import styled from 'styled-components/macro';

import { IBaseProps } from '../types';

const StyledH3 = styled.h3`
  margin: 1rem auto;
`;

export const HeaderThree = ({ children, ...props }: IBaseProps) => {
  return <StyledH3 {...props}>{children}</StyledH3>;
};
