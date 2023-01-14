import styled from 'styled-components';

type StyledHeaderProps = {
	isScrolled: boolean;
};

export const StyledHeader = styled.div<StyledHeaderProps>`
	display: flex;
	justify-content: center;
	padding: 1rem;
	width: 100%;
	height: 40px;
	position: fixed;
	top: 0;
	z-index: 1;
	background-color: ${({ isScrolled, theme }) => (isScrolled ? theme.colorSecondary + '4D' : '')};
	backdrop-filter: ${({ isScrolled }) => (isScrolled ? 'blur(4px)' : '')};
	transition: all 0.35s;
`;

export const StyledHeaderWidener = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	@media screen and (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 768px;
	}
`;

export const StyledHeaderLogo = styled.button`
	display: flex;
	align-items: center;
	padding: 0 1rem;
	svg {
		fill: ${({ theme }) => theme.colorPrimary};
		padding-right: 0.5rem;
	}
`;

export const StyledHeaderNav = styled.div`
	padding: 0 1rem;
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
