import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import portfolio from 'portfolio.config';
import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = `${portfolio.name} ─ developer`;
	const description = `Hey 👋 I'm ${portfolio.name}, a developer`;

	return {
		title,
		description,
		canonical: `https://${portfolio.domain}/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: portfolio.name,
			url: `https://${portfolio.domain}/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: `https://${portfolio.name}/banner.png`,
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: portfolio.twitter.username,
			site: portfolio.twitter.username,
		},
		...props,
	};
}
