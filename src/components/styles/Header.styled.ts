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
	svg {
		fill: ${({ theme }) => theme.colorPrimary};
		padding-right: 0.5rem;
	}
`;

export const StyledHeaderNav = styled.div`
	ul {
		display: flex;
		li {
			cursor: pointer;
			display: flex;
			align-items: center;
			padding: 0 0.5rem;
			font-size: 1.5rem;
		}
	}
`;
