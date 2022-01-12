import { RenderOptions, render as rtlRender } from '@testing-library/react';
// import { renderHook } from '@testing-library/react-hooks';
import { merge } from 'lodash-es';

import { IContextDefaults, contextDefaults } from './context';
import { Wrapper } from './wrapper';

type DeepPartial<O extends object> = {
  [K in keyof O]?: O[K] extends object ? DeepPartial<O[K]> : O[K];
};

export interface IRenderWithProvidersOptions extends Omit<RenderOptions, 'queries'> {
  context?: DeepPartial<IContextDefaults>;
}

export const providerWrapper = (options: IRenderWithProvidersOptions = {}) => {
  const { context: overrides = {} } = options;
  const defaults = contextDefaults();

  // jest-mock-extended creates a Proxy object that will mock methods as they are called
  // to preserve this mutate/assign directly to contextDefaults instead of returning a new object

  // performs a deep merge to take advantaged of default context / redux values;
  merge(defaults, overrides);

  return { wrapper: Wrapper(defaults), contextWithDefaults: defaults };
};

/**
 * Test helper to wrap your components in the providers used by the front end
 *
 * @param ui the react component you wish to test
 * @param options options for function
 * context is used to override provider setup
 * other options are passed through to @testing-library/react render()
 */
export const renderWithProviders = (
  ui: React.ReactElement,
  options: IRenderWithProvidersOptions = {}
) => {
  const { wrapper, contextWithDefaults } = providerWrapper(options);
  const result = rtlRender(ui, { wrapper, ...options });
  return { ...result, context: contextWithDefaults };
};

// /**
//  * Test helper to wrap your hooks in the providers used by the front end
//  *
//  * @param callback the hook you wish to test
//  * @param options options for function
//  * context is used to override provider setup
//  * other options are passed through to @testing-library/react-hooks renderHook()
//  */
// export const renderHookWithProviders = <P extends any = any, R extends any = any>(
//   callback: (props: P) => any,
//   options: IRenderWithProvidersOptions = {}
// ) => {
//   const { wrapper, contextWithDefaults } = providerWrapper(options);
//   const result = renderHook<P, R>(callback, { wrapper, ...options });
//   return { ...result, context: contextWithDefaults };
// };
