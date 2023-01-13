import Typed from 'react-typed';
import StyledAboutMe from './styles/AboutMe.styled';

const AboutMe = () => {
	return (
		<StyledAboutMe>
			<h1>Hi, I'm Imag </h1>
			<h2>
				<Typed
					strings={['Photographer', 'Designer', 'Freelancer', 'Perfectionist']}
					typeSpeed={60}
					backSpeed={80}
					loop
				/>
			</h2>
			<p>I keep taking photos to escape the brutal reality.</p>
		</StyledAboutMe>
	);
};

export default AboutMe;
