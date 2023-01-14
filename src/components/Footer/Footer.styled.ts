import styled from 'styled-components';

export const StyledFooter = styled.div`
	display: flex;
	width: 100%;
	max-width: 768px;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		background-color: ${({ theme }) => theme.colorPrimary};
		padding: 1rem;
		border-radius: 1rem;
		font-weight: bold;
		color: white;
		svg {
			font-size: 1.5rem;
		}
	}
`;
