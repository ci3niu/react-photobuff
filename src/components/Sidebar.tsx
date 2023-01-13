import { FC } from 'react';
import StyledSidebar from './styles/Sidebar.styled';

interface SidebarProps {
	themeHandler: () => void;
}

const Sidebar: FC<SidebarProps> = ({ themeHandler }) => {
	return (
		<StyledSidebar>
			<h2>Settings</h2>
			<h4>Dark mode</h4>
			<button onClick={themeHandler}>Toggle Theme</button>
		</StyledSidebar>
	);
};

export default Sidebar;
