import styled from 'styled-components';

const StyledRegister = styled.div.attrs(() => ({
  className: 'recovery-password-page',
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

  @media (max-height: 600px) {
    height: auto;

    .grid-row {
			padding-top: 64px;
		}
	}
`;

export default StyledRegister;
