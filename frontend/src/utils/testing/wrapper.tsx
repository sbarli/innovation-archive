import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store as reduxStore } from '../../store';
import { IBaseProps } from '../../types';

import { IContextDefaults } from './context';
import ReduceProviders from './reduce-providers';

/**
 * This Wrapper can be passed to the Wrapper option of @testing-library/react
 * it will wrap the component in all the providers necessary to set up your test
 * It is mainly used with the renderWithProviders option
 *
 * @param context the list of context defaults for each provider
 */
export const Wrapper = (context: IContextDefaults) => ({ children }: IBaseProps) => {
  const providers = [
    ({ children: reduxChildren }: IBaseProps) => {
      const mockStore = { ...reduxStore, getState: () => context.reduxStore };
      return <ReduxProvider store={mockStore}>{reduxChildren}</ReduxProvider>;
    },
  ];

  return (
    <Router>
      <ReduceProviders providers={providers}>{children}</ReduceProviders>
    </Router>
  );
};
