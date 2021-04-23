import styled from 'styled-components';

const StyledJoinAClass = styled.div.attrs(() => ({
  classNames: 'confirm-delete',
}))`
  padding: 16px;

  & > h3, & > p {
    text-align: center;
  }

  & > h3 {
    margin-bottom: 8px;
  }

  & > p {
    margin-bottom: 16px;
  }

  input {
    padding: 16px;
    font-size: 20px;
  }

  button {
    padding: 0px;
    height: 42px;
    position: relative;
  }
`;

export default StyledJoinAClass;
