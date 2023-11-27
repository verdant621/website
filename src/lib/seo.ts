import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = `Alex Lin's Website`;
	const description = "Deep Learning | Data Engineer";

	return {
		title,
		description,
		canonical: `https://jason.dev/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'jason',
			url: `https://jason.dev/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://jason.dev/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		...props,
	};
}
