import styled from 'styled-components';

const StyledHomeworks = styled.div.attrs(() => ({
  className: 'homework-page',
}))`
  width: 100%;

  .empty-message {
    margin-top: 32px;
  }
`;

export default StyledHomeworks;
