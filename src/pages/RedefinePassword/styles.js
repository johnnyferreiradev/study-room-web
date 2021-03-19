import styled from 'styled-components';

const StyledRedefinePassword = styled.div.attrs(() => ({
  className: 'redefine-password-page',
}))`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	.grid-container {
		padding-bottom: 64px;

		.grid-row {
			align-items: center;
		}
	}

  button {
    padding: 0px;
    height: 42px;
    position: relative;

    .loading {
      position: absolute;
      top: 5px;
    }
  }

	@media (max-width: 768px) {
		height: auto;

		.grid-container {
			display: flex;
			justify-content: center;
			align-items: center;
			padding-bottom: 0px;
		}

		.banner {
			align-items: flex-start;
			justify-content: flex-start;
			padding: 0px;
		}

		.banner-text > * {
			width: 100%;
			text-align: center;
		}
	}

	@media (max-height: 700px) {
    height: auto;

    .grid-row {
			padding-top: 64px;
		}
	}
`;

export default StyledRedefinePassword;
