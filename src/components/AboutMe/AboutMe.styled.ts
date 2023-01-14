import styled, { keyframes } from 'styled-components';

export const StyledAboutMe = styled.div`
	margin: 8rem 0;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	.name {
		color: ${({ theme }) => theme.colorPrimary};
	}
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

export const StyledAboutMePhoto = styled.div`
	width: 250px;
	height: 250px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	border-radius: 25%;
	margin-top: 6rem;
	background-color: ${({ theme }) => theme.colorPrimary};
	transform: rotate(17deg);
	img {
		transform: rotate(-17deg);
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
	}
`;

const bounce = keyframes`
0% {transform: translateY(-1rem)}
100% {transform: translateY(1rem)}`;

export const ScrollDown = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	font-size: 1.5rem;
	margin-top: 6rem;
	animation: ${bounce} 1.5s alternate infinite;
	svg {
		color: ${({ theme }) => theme.colorPrimary};
	}
`;
