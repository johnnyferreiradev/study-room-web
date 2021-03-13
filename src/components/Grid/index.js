import styled from 'styled-components';

// fluid: ocupa 100% do espaço horizontal disponível

export const Container = styled.div.attrs(() => ({
  className: 'grid-container',
}))`
  width: 100%;
  max-width: ${(props) => (props.fluid ? '100%' : '1366px')};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Row = styled.div.attrs(() => ({
  className: 'grid-row',
}))`
  width: 100%;
  heigth: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  flex-wrap: wrap;
`;

function getColumnWidth(value) {
  if (!value) return false;

  const width = (value / 12) * 100;
  return `width: ${width}%;`;
}

export const Column = styled.div.attrs(() => ({
  className: 'grid-column',
}))`
  box-sizing: border-box;
  @media only screen and (max-width: 768px) {
    ${({ mobile }) => mobile && getColumnWidth(mobile)}
  }
  @media only screen and (min-width: 768px) {
    ${({ tablet }) => tablet && getColumnWidth(tablet)}
  }
  @media only screen and (min-width: 1000px) {
    ${({ desktop }) => desktop && getColumnWidth(desktop)}
  }
`;
