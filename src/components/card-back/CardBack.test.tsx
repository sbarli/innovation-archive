import { render } from '@testing-library/react';
import React from 'react';

import { Ages } from '../../enums';

import { CardBack } from '.';

describe('<CardBack />', () => {
  it('renders something', () => {
    const { getByTestId } = render(<CardBack cardAge={Ages.ONE} />);

    expect(getByTestId('card-back')).toBeInTheDocument();
  });
});
