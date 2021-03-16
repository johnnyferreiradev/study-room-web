import styled from 'styled-components';

import {
  primaryColor,
} from 'variables';

const StyledStudentClassCard = styled.div.attrs(() => ({
  className: 'student-class-card',
}))`
  position: relative;
  padding: 16px;
  width: 273px;

  & > button {
    width: 100%;
    padding: 0px;

    & > div {
      padding: 0px;
    }

    .class-image {
      background: ${primaryColor};
      color: #ffffff;
      height: 108px;
      overflow: hidden;
      font-size: 42px;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
      }
    }

    .student-class-content {
      padding: 16px;

      h3{
        font-weight: bold;
        text-transform: capitalize;
        margin-bottom: 8px;
      }

      p {
        font-weight: normal;
        text-transform: capitalize;
      }
    }
  }

  .notification-tag {
    position: absolute;
    top: 4px;
    right: 4px;
  }
`;

export default StyledStudentClassCard;
