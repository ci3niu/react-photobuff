import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
 0% { transform: translateX(100%) }
 100% { transform: translateX(0)}
`;

const StyledSidebar = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	z-index: 1;
	display: flex;
	flex-direction: column;
	width: 60%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colorBackgroundSecondary || theme.colorBackground};
	padding: 1rem;
	animation: ${slideIn};
	animation-duration: 0.5s;
	button {
		height: 2rem;
		width: 4rem;
		color: ${({ theme }) => theme.colorPrimary};
		border: 1px solid ${({ theme }) => theme.colorPrimary};
	}

	h2 {
		margin-bottom: 2rem;
	}
`;

export default StyledSidebar;
