/**
 * ************************************
 *
 * @module  FieldError
 * @author  samanthasalley
 * @date    05/31/2020
 * @description custom component for displaying
 *           react-final-form validation errors
 *
 * ************************************
 */
import React from 'react';
import { Field } from 'react-final-form';

import { StyledError } from './FieldError.styled';

const FieldError = ({ name = '' }: { name?: string }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <StyledError>{error}</StyledError> : null
    }
  />
);

export default FieldError;
