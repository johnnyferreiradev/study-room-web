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

  .status {
    min-height: 24px;
    align-items: center;
    p {
      text-align: end;
      line-height: 1;
      font-size: 14px;
    }
  }

  .points {
    height: 36px;
    text-align: end;
    p {
      font-size: 14px;
    }
  }

  .delivery-date {
    p {
      font-size: 14px;
    }
  }

  .answer-text-field-row {
    margin-bottom: 0px;
  }

  .material-list {
    margin-top: 16px;

    .material {
      width: 100%;
      margin-right: 0px;
    }
  }

  .suspended-menu {
    width: 100%;

    .suspended-content {
      width: 100%;
    }

    .add-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 42px;

      svg {
        pointer-events: none;
        font-size: 16px;
        margin-right: 4px;
        position: relative;
        top: -2px;
      }
    }
  }

  .send-button {
    padding: 0px;
    height: 42px;
    position: relative;

    .loading {
      position: absolute;
      top: 5px;
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
