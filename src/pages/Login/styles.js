import styled from 'styled-components';

const StyledLogin = styled.div.attrs(() => ({
	className: 'login-page',
}))`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	.grid-container {
		padding-bottom: 64px;
	}

	@media (max-width: 768px) {
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
`;

export default StyledLogin;
