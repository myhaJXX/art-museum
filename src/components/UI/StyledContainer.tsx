import styled, { css } from 'styled-components';
import { IContainer } from '../../models/IContainer';
import { IAddGrid } from '../../models/IAddGrid';

const StyledContainer = css<IContainer>`
  height: fit-content;
  display: ${({ $display = 'flex' }) => $display};
  justify-content: ${({ $justifyc }) => $justifyc};
  justify-items: ${({ $justifyi }) => $justifyi};
  align-items: ${({ $aligni }) => $aligni};
  gap: ${({ $gap = '0px' }) => $gap};
`;
const AddGrid = css<IAddGrid>`
  grid-template-columns: ${({ $gridc }) => $gridc};
`;

export const StyledContainerS = styled.section<IContainer & IAddGrid>`
  ${StyledContainer};
  ${AddGrid}
`;

export const StyledContainerD = styled.div<IContainer & IAddGrid>`
  ${StyledContainer};
  ${AddGrid}
`;
