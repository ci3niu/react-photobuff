interface ITheme {
	id?: string;
	colorBackground?: string;
	colorBackgroundSecondary?: string;
	colorText?: string;
	colorPrimary?: string;
	colorSecondary?: string;
}

export const themeDefault: ITheme = {
	colorPrimary: '#008080',
	colorSecondary: '#777779',
};

export const themeDark: ITheme = {
	id: 'dark',
	colorBackground: '#151418',
	colorBackgroundSecondary: '#2f2e34',
	colorText: 'white',
};

export const themeLight: ITheme = {
	id: 'light',
	colorBackground: '#fff',
	colorText: 'black',
};
