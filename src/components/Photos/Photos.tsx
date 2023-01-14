import { StyledPhotos, StyledCarousel, CarouselItem } from './Photos.styled';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Photos = () => {
	const slides = [
		{
			id: 1,
			img: 'https://images.unsplash.com/photo-1673261490847-ad50cb7fde91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
		},
		{
			id: 2,
			img: 'https://images.unsplash.com/photo-1673537074513-e66435b69012?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		},
		{
			id: 3,
			img: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
		},
		{
			id: 4,
			img: 'https://images.unsplash.com/photo-1673546803288-488dbba044c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		},
		{
			id: 5,
			img: 'https://images.unsplash.com/photo-1673368777914-a3bdac42c5e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
		},
	];

	return (
		<StyledPhotos>
			<h1>Photos</h1>
			<p>Some of my photos</p>
			<StyledCarousel>
				<Carousel
					showArrows={false}
					showStatus={false}
					showThumbs={false}
					swipeable={true}
					emulateTouch={true}
					autoPlay={true}
					interval={3000}
					infiniteLoop={true}
				>
					{slides.map((slide) => (
						<div key={slide.id}>
							<CarouselItem>
								<img src={slide.img} alt='' />
							</CarouselItem>
						</div>
					))}
				</Carousel>
			</StyledCarousel>
		</StyledPhotos>
	);
};

export default Photos;
