import styled from 'styled-components';

const StyledJoinAClass = styled.div.attrs(() => ({
  classNames: 'confirm-send-response',
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
    height: 42px;
    position: relative;
    margin: 0px 8px;
  }

  .content {
    padding-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default StyledJoinAClass;
