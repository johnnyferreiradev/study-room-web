import styled from 'styled-components';

const StyledHomeworkCard = styled.div.attrs(() => ({
  className: 'homework-card',
}))`
  position: relative;
  padding: 16px 32px;
  width: 100%;
  margin-bottom: 16px;

  .profile-icon {
    margin-right: 16px;
  }

  .homework-info {
    h3 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
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

  @media (max-width: 768px) {
    padding: 16px;

    .footer {
      flex-direction: column;

      p {
        width: 100%;
        text-align: start;
        margin-bottom: 32px;
      }
    }
  }
`;

export default StyledHomeworkCard;
