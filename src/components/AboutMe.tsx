import Typed from 'react-typed';
import { StyledAboutMe, StyledAboutMePhoto } from './styles/AboutMe.styled';
import fakePerson from '../assets/fakePerson.jpg';

const AboutMe = () => {
	return (
		<StyledAboutMe>
			<h1>
				Hi, I'm <span className='name'>Imag</span>{' '}
			</h1>
			<h2>
				<Typed
					strings={['Photographer', 'Designer', 'Freelancer', 'Perfectionist']}
					typeSpeed={60}
					backSpeed={80}
					loop
				/>
			</h2>
			<p>I keep taking photos to escape the brutal reality.</p>
			<StyledAboutMePhoto>
				<img src={fakePerson} alt='avatar' />
			</StyledAboutMePhoto>
		</StyledAboutMe>
	);
};

export default AboutMe;
