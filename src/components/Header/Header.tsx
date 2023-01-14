import { FC, useEffect, useState } from 'react';
import { StyledHeader, StyledHeaderLogo, StyledHeaderNav, StyledHeaderWidener } from './Header.styled';
import { MdMonochromePhotos } from 'react-icons/md';
import { BiCog } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';

interface HeaderProps {
	sidebarHandler: () => void;
}

const Header: FC<HeaderProps> = ({ sidebarHandler }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	const handleNavScroll = () => {
		if (window.scrollY >= 80) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleNavScroll);
	}, []);

	return (
		<StyledHeader isScrolled={isScrolled}>
			<StyledHeaderWidener>
				<StyledHeaderLogo>
					<MdMonochromePhotos size={36} />
					<h2>Buff</h2>
				</StyledHeaderLogo>
				<StyledHeaderNav>
					<ul>
						<a href='https://www.instagram.com/' target='_blank'>
							<li>
								<BsInstagram />
							</li>
						</a>
						<li onClick={sidebarHandler}>
							<BiCog />
						</li>
					</ul>
				</StyledHeaderNav>
			</StyledHeaderWidener>
		</StyledHeader>
	);
};

export default Header;
