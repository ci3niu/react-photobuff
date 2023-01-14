import Typed from 'react-typed';
import { StyledAboutMe, StyledAboutMePhoto, ScrollDown } from './AboutMe.styled';
import fakePerson from '../../assets/fakePerson.jpg';
import { CgMouse } from 'react-icons/cg';
import { FaAngleDown } from 'react-icons/fa';

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
			<ScrollDown>
				<CgMouse />
				Scroll down
				<FaAngleDown />
			</ScrollDown>
		</StyledAboutMe>
	);
};

export default AboutMe;
