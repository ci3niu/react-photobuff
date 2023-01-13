import AboutMe from './components/AboutMe';
import Header from './components/Header';
import StyledGlobalStyles from './components/styles/StyledGlobalStyles';
import StyledWrapper from './components/styles/Wrapper.styled';
import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import { themeDefault, themeLight, themeDark } from './components/styles/Themes.styled';
import Sidebar from './components/Sidebar';
import StyledBackdrop from './components/styles/Backdrop.styled';
import Projects from './components/Projects';

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
				<Projects />
			</StyledWrapper>
		</ThemeProvider>
	);
};

export default App;
