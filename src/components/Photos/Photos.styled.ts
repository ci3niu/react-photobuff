import styled from 'styled-components';

export const StyledPhotos = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 768px;
	h1 {
		color: ${({ theme }) => theme.colorPrimary};
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	p {
		font-weight: bold;
		margin-bottom: 2rem;
	}
`;

export const StyledCarousel = styled.div`
	display: flex;
	align-items: center;
	width: 80%;
	padding: 0.5rem;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.colorSecondary};
	box-shadow: 0 100px 100px rgba(255, 0, 0, 0.1);
	overflow: hidden;

	.carousel .control-dots .dot {
		background-color: ${({ theme }) => theme.colorPrimary};
	}
`;

export const CarouselItem = styled.div`
	width: 100%;
	height: 420px;
	overflow: hidden;
	border-radius: 1rem;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
