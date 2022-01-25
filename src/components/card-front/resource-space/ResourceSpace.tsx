import React from 'react';
import styled, { css } from 'styled-components/macro';

import { Resources } from '../../../enums';
import { resourceToResourceImageMap } from '../../../utils/resources';

const IMAGE_SIZE = '2.25rem';

const sharedResourceSpaceStyles = css`
  height: ${IMAGE_SIZE};
  width: ${IMAGE_SIZE};
  border: 2px solid white;
`;

const ResourceSpaceContainer = styled.div`
  height: calc(${IMAGE_SIZE} + 0.5rem);
  width: calc(${IMAGE_SIZE} + 0.5rem);
  border: 4px solid var(--card-border);
`;

const StyledResourceSpace = styled.img`
  ${sharedResourceSpaceStyles}
`;
const NoResourceSpace = styled.div`
  background-color: var(--card-empty-resource-bg);
  ${sharedResourceSpaceStyles}
`;

interface IResourceSpaceProps {
  resource: Resources | null;
}
export function ResourceSpace({ resource }: IResourceSpaceProps) {
  console.log('');
  console.log('resource: ', resource);
  const resourceImgPath = resource ? resourceToResourceImageMap[resource] : null;
  console.log('resourceImgPath: ', resourceImgPath);
  console.log('');
  return (
    <ResourceSpaceContainer data-testid="resource-space">
      {resourceImgPath ? (
        <StyledResourceSpace src={resourceImgPath} alt={`${resource} Resource`} />
      ) : (
        <NoResourceSpace></NoResourceSpace>
      )}
    </ResourceSpaceContainer>
  );
}
