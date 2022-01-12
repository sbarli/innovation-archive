import React from 'react';

import { IBaseProps } from '../../types';

interface IReduceProvidersProps extends IBaseProps {
  providers: any;
}

export default function ReduceProviders({ providers, children }: IReduceProvidersProps) {
  return (
    <>
      {providers.reduceRight((acc: any, Comp: any) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
}
