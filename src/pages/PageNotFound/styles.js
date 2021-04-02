import styled from 'styled-components';

const StyledPageNotFound = styled.div.attrs(() => ({
  className: 'page-not-found',
}))`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    margin-bottom: 32px;
  }

  svg {
    font-size: 96px;
  }
`;

export default StyledPageNotFound;
