import styled from 'styled-components';

import {
  tertiaryColor,
  primaryColor,
} from 'variables';

const styledFooter = styled.footer.attrs(() => ({
  className: 'footer',
}))`
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 16px;
  background: ${primaryColor};
  display: flex;
  justify-content: center;
  border-top: 2px solid ${tertiaryColor};
  color: ${primaryColor};

  .left-side > * {
    margin-bottom: 16px;
  }

  .right-side > * {
    margin-bottom: 16px;
  }

  .left-side, .right-side {
    display: flex;
    flex-direction: column;
  }

  .left-side {
    align-items: flex-start;

    h2 {
      font-size: 20px;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.83px;
      margin-bottom: 32px;
    }

    li {
      font-size: 12px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 2;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .phones {
      display: flex;
      font-size: 16px;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: 1.33px;

      & > * {
        margin-right: 8px;
      }
    }
  }

  .right-side {
    align-items: flex-end;

    h3 {
      font-size: 14px;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.58px;
      text-transform: uppercase;
    }

    .social-networks {
      width: 200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    p {
      font-size: 12px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 2;
      letter-spacing: 1px;
      text-align: right;
      text-transform: uppercase;
    }
  }

  @media (max-width: 768px) {
    position: relative;
    padding: 32px;
    margin-top: 64px;

    .left-side {
      margin-bottom: 56px;
    }

    p {
      text-align: end;
    }
  }

  @media (max-height: 784px) {
    position: relative;
    padding: 32px;
    margin-top: 64px;
	}
`;

export default styledFooter;
