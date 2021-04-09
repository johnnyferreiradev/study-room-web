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

  .add-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;

    svg {
      font-size: 16px;
      margin-right: 4px;
      position: relative;
      top: -2px;
    }
  }

  .comment {
    .grid-row {
      margin: 0px;
      margin-bottom: 4px;
      padding: 0px;

      .content {
        /* margin-left: 0px !important; */
      }
    }
  }
`;

export default StyledAnswer;
