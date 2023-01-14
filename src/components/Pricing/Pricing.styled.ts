import styled from 'styled-components';

export const StyledPricing = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-top: 6rem;
	max-width: 768px;
	padding: 1rem;
	margin-bottom: 2rem;

	h1 {
		color: ${({ theme }) => theme.colorPrimary};
		font-size: 2rem;
		margin-bottom: 2rem;
	}
`;

export const StyledPricingItems = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colorSecondary + '4D'};
	border-radius: 1rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	max-width: 768px;
	box-shadow: 5px 5px 25px 5px ${({ theme }) => theme.colorPrimary + '40'};
`;

export const StyledPricingItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem;
	border-bottom: 1px solid ${({ theme }) => theme.colorPrimary};

	&:last-child {
		border-bottom: none;
	}

	h2 {
		padding: 0.5rem;
	}
	span {
		color: ${({ theme }) => theme.colorPrimary};
		font-size: 1.3rem;
		font-weight: bold;
	}
	p {
		font-size: 1rem;
		margin-left: 1rem;
	}

	button {
		font-weight: bold;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		background-color: ${({ theme }) => theme.colorPrimary};
		color: white;

		&:hover {
			scale: 1.1;
			background-color: ${({ theme }) => theme.colorPrimary + '80'};
		}
	}
`;
