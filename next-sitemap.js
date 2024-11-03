const isProduction = process.env.NODE_ENV === 'production';
const portfolio = require('./portfolio.config.json');
const domain = isProduction ? portfolio.domain : 'localhost:3000';
const protocol = isProduction ? 'https' : 'http';

/**
 * @type {import('next-sitemap').IConfig}
 */
module.exports = {
	exclude: ['/server-sitemap.xml'],
	generateRobotsTxt: true,
	robotsTxtOptions: {
		additionalSitemaps: [
			`${protocol}://${domain}/sitemap.xml`,
			`${protocol}://${domain}/server-sitemap.xml`,
		],
	},
	siteUrl: `${protocol}://${domain}`,
};
