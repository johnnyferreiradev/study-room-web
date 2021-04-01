import styled from 'styled-components';

import { primaryColor } from 'variables';

const StyledChangeProfileAvatar = styled.div.attrs(() => ({
  className: 'change-profile-avatar',
}))`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    margin-bottom: 16px;
  }

  label#avatar {
    border-radius: 50%;
    border: 2px dashed ${primaryColor};
    background-size: cover;
    cursor: pointer;
    height: 224px;
    width: 224px;
    margin-bottom: 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
      display: none;
    }

    p {
      text-align: center;
    }
  }

  label#avatar.has-avatar {
    border: none;
    img {
      display: none;
    }

    p {
      display: none;
    }
  }

  button {
    width: 224px;
    margin-bottom: 16px;
  }
`;

export default StyledChangeProfileAvatar;
