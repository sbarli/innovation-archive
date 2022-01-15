import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../../store';
import { IBaseProps } from '../../../types';
import { useDrawCard } from '../use-draw-card';

const Wrapper = ({ children }: IBaseProps) => <Provider store={store}>{children}</Provider>;

describe('useDrawCard', () => {
  it('returns a function', () => {
    const { result } = renderHook(() => useDrawCard('player1'), { wrapper: Wrapper });
    expect(typeof result.current).toBe('function');
  });
});
