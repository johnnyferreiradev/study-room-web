import styled from 'styled-components';

const StyledCommunicated = styled.div.attrs(() => ({
  className: 'communicated',
}))`
  position: relative;
  padding: 16px 32px;
  width: 100%;
  margin-bottom: 16px;

  .profile-icon {
    margin-right: 16px;
  }

  .homework-info {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 16px;
      line-height: 1;
    }

    p {
      font-size: 14px;
    }
  }

  .content {
    padding: 16px 0px;
    font-size: 14px;
  }

  .footer {
    p {
      font-size: 14px;
      padding: 0px;
      margin: 0px;
      height: max-content;
    }

    button {
      padding: 0px;
    }
  }
`;

export default StyledCommunicated;
