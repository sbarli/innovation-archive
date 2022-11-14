import React from 'react';
import styled, { css } from 'styled-components/macro';

import { Resources } from '../../enums';
import { resourceToResourceImageMap } from '../../utils/resources';

export enum ResourceImageSizes {
  LG = 'lg',
  SM = 'sm',
}

const imageSizesMap = {
  [ResourceImageSizes.SM]: '2.25rem',
  [ResourceImageSizes.LG]: '3rem',
};

const sharedResourceSpaceStyles = css<{ imgSize: string }>`
  height: ${p => p.imgSize};
  width: ${p => p.imgSize};
  border: 2px solid white;
`;

const ResourceSpaceContainer = styled.div<{ imgSize: string }>`
  height: calc(${p => p.imgSize} + 0.5rem);
  width: calc(${p => p.imgSize} + 0.5rem);
  border: 4px solid var(--card-border);
`;

const StyledResourceSpace = styled.img<{ imgSize: string }>`
  ${sharedResourceSpaceStyles}
`;
const NoResourceSpace = styled.div<{ imgSize: string }>`
  background-color: var(--card-empty-resource-bg);
  ${sharedResourceSpaceStyles}
`;

interface IResourceSpaceProps {
  resource: Resources | null;
  size: ResourceImageSizes;
}
export function ResourceSpace({ resource, size }: IResourceSpaceProps) {
  const resourceImgPath = resource ? resourceToResourceImageMap[resource] : null;
  const resourceImgSize = imageSizesMap[size];
  return (
    <ResourceSpaceContainer data-testid="resource-space" imgSize={resourceImgSize}>
      {resourceImgPath ? (
        <StyledResourceSpace
          imgSize={resourceImgSize}
          src={resourceImgPath}
          alt={`${resource} Resource`}
        />
      ) : (
        <NoResourceSpace imgSize={resourceImgSize}></NoResourceSpace>
      )}
    </ResourceSpaceContainer>
  );
}
