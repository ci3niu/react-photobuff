import { StyledFooter } from './Footer.styled';
import { AiOutlineArrowUp } from 'react-icons/ai';

const Footer = () => {
	return (
		<StyledFooter>
			<button onClick={() => window.scrollTo(0, 0)}>
				To Top
				<AiOutlineArrowUp />
			</button>
			<p>
				Coded with 💜 by <a href='https://github.com/ci3niu'>@cieniu</a>
			</p>
		</StyledFooter>
	);
};

export default Footer;
