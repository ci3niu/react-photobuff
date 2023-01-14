import { StyledPhotos, StyledCarousel, CarouselItem } from './Photos.styled';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { slides } from './slidesData';

const Photos = () => {
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
