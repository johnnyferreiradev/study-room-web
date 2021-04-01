import styled from 'styled-components';

const StyledNewLink = styled.div.attrs(() => ({
  classNames: 'new-link',
}))`
  padding: 0px;

  & > h3, & > p {
    text-align: center;
  }

  & > h3 {
    margin-bottom: 8px;
  }

  & > p {
    margin-bottom: 16px;
  }

  button {
    padding: 0px;
    height: 42px;
    position: relative;
  }

  .form-group:last-child {
    margin: 0px;
  }
`;

export default StyledNewLink;
