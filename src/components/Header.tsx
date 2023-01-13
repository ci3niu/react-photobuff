import { FC } from 'react';
import { StyledHeader, StyledHeaderLogo, StyledHeaderNav } from './styles/Header.styled';
import { MdMonochromePhotos } from 'react-icons/md';
import { BiCog } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';

interface HeaderProps {
	sidebarHandler: () => void;
}

const Header: FC<HeaderProps> = ({ sidebarHandler }) => {
	return (
		<StyledHeader>
			<StyledHeaderLogo>
				<MdMonochromePhotos size={36} />
				<h2>Buff</h2>
			</StyledHeaderLogo>
			<StyledHeaderNav>
				<ul>
					<li>
						<BsInstagram />
					</li>
					<li onClick={sidebarHandler}>
						<BiCog />
					</li>
				</ul>
			</StyledHeaderNav>
		</StyledHeader>
	);
};

export default Header;
