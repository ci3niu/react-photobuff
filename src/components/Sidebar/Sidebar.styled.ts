import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
 0% { transform: translateX(100%) }
 100% { transform: translateX(0)}
`;

export const StyledSidebar = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	z-index: 2;
	display: flex;
	flex-direction: column;
	width: 60%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colorBackgroundSecondary || theme.colorBackground};
	padding: 1rem;
	animation: ${slideIn};
	animation-duration: 0.5s;

	@media screen and (min-width: 960px) {
		width: 25%;
	}
	button {
		width: 5rem;
		color: ${({ theme }) => theme.colorPrimary};
		border: 1px solid ${({ theme }) => theme.colorPrimary};
		font-weight: bold;
		padding: 0 1rem;
	}
	h2 {
		margin-bottom: 3rem;
	}
	h4 {
		margin-bottom: 0.5rem;
	}
`;

export const StyledBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.75);
	z-index: 1;
`;
