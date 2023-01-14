import { useState, useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import { themeDefault, themeLight, themeDark } from './components/styles/Themes.styled';
import StyledGlobalStyles from './components/styles/StyledGlobalStyles';
import StyledWrapper from './components/styles/Wrapper.styled';

import Sidebar from './components/Sidebar/Sidebar';
import { StyledBackdrop } from './components/Sidebar/Sidebar.styled';

import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Photos from './components/Photos/Photos';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';

const App = () => {
	const [theme, setTheme] = useState(themeDefault);
	const [sidebarState, setSidebarState] = useState(false);

	const handleSidebarState = () => {
		setSidebarState((prevState) => !prevState);
		console.log('SidebarState', sidebarState);
	};
	const handleThemeToggle = () => {
		theme.id === 'dark' ? setTheme({ ...themeDefault, ...themeLight }) : setTheme({ ...themeDefault, ...themeDark });
	};

	useEffect(() => {
		setTheme({ ...themeDefault, ...themeDark });
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<StyledGlobalStyles />
			<StyledWrapper>
				{sidebarState && (
					<>
						<Sidebar themeHandler={handleThemeToggle} />
						<StyledBackdrop onClick={handleSidebarState} />
					</>
				)}

				<Header sidebarHandler={handleSidebarState} />
				<AboutMe />
				<Photos />
				<Pricing />
				<Footer />
			</StyledWrapper>
		</ThemeProvider>
	);
};

export default App;
