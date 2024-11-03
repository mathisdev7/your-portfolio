import defaultTheme from 'windicss/defaultTheme';
import portfolio from '../../portfolio.config';

export const colors: Record<string, Record<number, string>> = {
	...defaultTheme.colors,
	...portfolio.colors,
};
