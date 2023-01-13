import styled, { keyframes } from 'styled-components';

const rotateDiv = keyframes`
0% {transform: rotate(33deg)}
100% {transform: rotate(-33deg)}`;

const counterRotateDiv = keyframes`
0% {transform: rotate(-33deg)}
100% {transform: rotate(33deg)}`;

export const StyledAboutMe = styled.div`
	margin: 4rem 0;
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
	margin-top: 4rem;
	background-color: ${({ theme }) => theme.colorPrimary};
	transform: rotate(25deg);
	animation: ${rotateDiv} 3s alternate infinite;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
		animation: ${counterRotateDiv} 3s alternate infinite;
	}
`;
