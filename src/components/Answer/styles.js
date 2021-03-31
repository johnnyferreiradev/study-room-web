import styled from 'styled-components';

const StyledAnswer = styled.div.attrs(() => ({
  className: 'answer',
}))`
  width: 100%;

  h3 {
    font-size: 16px;
  }

  .grid-row {
    margin-bottom: 16px;

    &:last-child {
      margin: 0px;
    }
  }

  .material {
    width: 100%;
    margin-right: 0px;
  }
`;

export default StyledAnswer;
