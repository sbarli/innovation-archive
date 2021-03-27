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
import styled from 'styled-components/macro';

import FieldError from '../../validation/field-error/FieldError';

const FieldContainer = styled.div`
  label {
    font-weight: var(--font-weight-bold);
    margin-right: 1rem;
  }

  input {
    padding: 5px 10px;
    border: 1px solid;
    border-radius: 10px;
    box-shadow: none;
  }
`;

interface IRenderTextProps extends FieldRenderProps<string, HTMLElement> {
  label: string;
}

const RenderText = ({ input, meta: { touched, error }, label }: IRenderTextProps) => (
  <FieldContainer>
    {label && <label>{label}</label>}
    <input {...input} type="text" />
    <FieldError name={input.name} />
  </FieldContainer>
);

export default RenderText;
