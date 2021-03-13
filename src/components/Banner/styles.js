import styled from 'styled-components';

import { baseColor, primaryColor, maxScreenWidth } from 'variables';

const styledBanner = styled.div.attrs(() => ({
  className: 'banner',
}))`
  box-sizing: border-box;
  width: 100%;
  max-width: ${maxScreenWidth} !important;
  height: 400px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-color: ${baseColor};
  color: ${primaryColor};

  display: flex;
  justify-content: center;

  .grid-container, .grid-row, .grid-column {
    height: 100px;
  }

  .banner-text {
    padding: 96px;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .banner-title, .banner-description {
      margin-bottom: 24px;
    }

    .banner-title {
      font-size: 56px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
    }

    .banner-description {
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
