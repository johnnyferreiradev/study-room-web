import styled from 'styled-components';

const StyledWelcome = styled.div.attrs(() => ({
  className: 'welcome-page',
}))`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .banner {
    .grid-container {
      height: 100%;
      justify-content: flex-end;
      padding-bottom: 64px;

      .banner-title {
        text-align: center;
        font-size: 48px;
      }

      .banner-subtitle {
        text-align: center;
      }

      .banner-actions {
        margin: 32px 0px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        > * {
          margin: 0 4px;
        }
      }
    }
  }
`;

export default StyledWelcome;
