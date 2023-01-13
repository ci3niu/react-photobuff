import styled from 'styled-components';
const StyledAboutMe = styled.div`
	margin-top: 4rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	h2 {
		font-size: 1.5rem;
		color: ${({ theme }) => theme.colorSecondary};
		margin-bottom: 1rem;
	}

	p {
		font-weight: bold;
	}
`;

export default StyledAboutMe;
