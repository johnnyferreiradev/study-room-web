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
`;

export default StyledLogin;
