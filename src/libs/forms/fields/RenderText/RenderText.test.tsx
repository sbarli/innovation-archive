import React from 'react';
import ReactDOM from 'react-dom';

import RenderText from './RenderText';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RenderText
      input={{
        name: 'test',
        value: 'test',
        onBlur: () => {},
        onChange: () => {},
        onFocus: () => {},
      }}
      meta={{ touched: false, error: '' }}
      label="test"
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
