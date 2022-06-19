import { render, screen } from '@testing-library/react';
import React from 'react';
import { Form } from 'react-final-form';

import noop from '../../utils/noop';

import RenderText from './RenderText';

describe('<RenderText />', () => {
  it('renders', () => {
    render(
      <Form onSubmit={noop}>
        <RenderText
          input={{
            name: 'test input text',
            value: 'test',
            onBlur: () => {},
            onChange: () => {},
            onFocus: () => {},
          }}
          meta={{ touched: false, error: '' }}
          label="test"
        />
      </Form>
    );

    expect(screen.getByText('test input text')).toBeInTheDocument();
  });
});
