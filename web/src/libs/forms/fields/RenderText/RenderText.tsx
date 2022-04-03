/**
 * ************************************
 *
 * @module  RenderText
 * @author  samanthasalley
 * @date    05/31/2020
 * @description react-final-form custom Field component to render
 *  input elements with relevant error/warning validation messages
 *
 * ************************************
 */
import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import styled, { css } from 'styled-components/macro';

import FieldError from '../../validation/field-error/FieldError';

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const labelAboveStyles = css`
  display: block;
  margin-bottom: 0.5rem;
`;

const labelAsideStyles = css`
  margin-right: 1rem;
`;

const StyledLabel = styled.label<{ $showAbove: boolean }>`
  font-weight: bold;
  ${p => (p.$showAbove ? labelAboveStyles : labelAsideStyles)}
`;

const StyledInput = styled.input`
  width: var(--input-width);
  padding: 5px 10px;
  border: 1px solid;
  border-radius: 10px;
  box-shadow: none;
`;

interface IRenderTextProps extends FieldRenderProps<string, HTMLElement> {
  label?: string;
  labelAbove?: boolean;
}

const RenderText = ({
  input,
  meta: { touched, error },
  label,
  labelAbove = false,
}: IRenderTextProps) => (
  <FieldContainer>
    {label && <StyledLabel $showAbove={labelAbove}>{label}</StyledLabel>}
    <StyledInput {...input} type="text" />
    <FieldError name={input.name} />
  </FieldContainer>
);

export default RenderText;
