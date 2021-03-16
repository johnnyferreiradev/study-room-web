import styled from 'styled-components';

import { primaryColor, maxScreenWidth } from 'variables';

const styledBanner = styled.div.attrs(() => ({
  className: 'banner',
}))`
  box-sizing: border-box;
  width: 100%;
  max-width: ${maxScreenWidth} !important;
  height: 400px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  color: ${primaryColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .banner-text {
    padding: 96px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .title, .subtitle {
      margin-bottom: 24px;
    }

    .title {
      font-size: 56px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
    }

    .subtitle {
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: 1px;
    }
  }

  .banner-image {
    img {
      width: 100%;
    }
  }

  @media (max-width: 1000px) {
    padding-top: 32px;
    height: max-content;

    .banner-text {
      padding: 32px;
    }
  }
`;

export default styledBanner;
