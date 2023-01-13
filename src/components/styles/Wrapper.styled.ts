import styled from 'styled-components';

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
	background-color: ${({ theme }) => theme.colorBackground};
	color: ${({ theme }) => theme.colorText};
	transition: all 0.35s;

	button {
		border: none;
		background: none;
		cursor: pointer;
		color: ${({ theme }) => theme.colorText};
	}
`;

export default StyledWrapper;
