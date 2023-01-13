import styled from 'styled-components';

export const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
`;

export const StyledHeaderLogo = styled.button`
	display: flex;
	align-items: center;
`;

export const StyledHeaderNav = styled.div`
	ul {
		display: flex;
		li {
			display: flex;
			align-items: center;
			padding: 0 0.5rem;
			font-size: 1.5rem;
		}
	}
`;
