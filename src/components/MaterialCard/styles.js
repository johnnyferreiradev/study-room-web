import styled from 'styled-components';

const StyledMaterialCard = styled.div.attrs(() => ({
  className: 'material-card',
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

    .empty-list {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export default StyledMaterialCard;
