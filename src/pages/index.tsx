import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Carousel, { ResponsiveType } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Animate, Button, Pill } from '~/components';
import { EventType, NavigationItemType } from '~/types';
import { Layout } from '~/layouts';

import type { EventProps } from '~/components/Event.component';
import type { NavigationItem } from '~/types';

const Event = dynamic<EventProps>(
	() => import('~/components/Event.component').then(({ Event }) => Event),
	{
		ssr: false,
	},
);

const ACTIONS: Array<NavigationItem> = [
	{
		type: NavigationItemType.LINK,
		href: '/timeline',
		icon: <Icon className="mr-3" icon="feather:clock" />,
		text: 'Experience',
	},
	{
		type: NavigationItemType.LINK,
		href: '/projects',
		icon: <Icon className="mr-3" icon="feather:copy" />,
		text: 'Projects',
	},
	{
		type: NavigationItemType.LINK,
		href: 'https://drive.google.com/file/d/1Q-VnuBrD10M7hDZNpBtrsiv2zpSbmfQ9/view?usp=sharing',
		icon: <Icon className="mr-3" icon="feather:file" />,
		text: 'Resume',
	},
	{
		type: NavigationItemType.LINK,
		external: true,
		href: 'https://www.linkedin.com/in/alex-lin-32987b295/',
		icon: <Icon className="mr-3" icon="feather:linkedin" />,
		text: 'LinkedIn',
	},
];

export default function HomePage(): JSX.Element {
	const today = new Date();
	const birthday = new Date('1994-06-21');
	const isBirthday =
		today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth();
	const skills = [
		{
			name: 'Python',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
		},
		{
			name: 'R',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg',
		},
		{
			name: 'Tensorflow',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg',
		},
		{
			name: 'Pytorch',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg',
		},
		{
			name: 'GitHub',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
		},
		{
			name: 'Docker',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
		},
		{
			name: 'Jenkins',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg',
		},
		{
			name: 'Linux',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
		},
		{
			name: 'JavaScript',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
		},
		{
			name: 'HTML5',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
		},
		{
			name: 'CSS3',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
		},
		{
			name: 'MongoDB',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
		},
		{
			name: 'Express.js',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
		},
		{
			name: 'React',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
		},
		{
			name: 'Node.js',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
		},
		{
			name: 'TypeScript',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
		},
		{
			name: 'Next.js',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
		},
		{
			name: 'MySQL',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
		},
		{
			name: 'PostgreSQL',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
		},
		{
			name: 'GraphQL',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg',
		},
		{
			name: 'OpenCV',
			icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-plain.svg',
		},
	];

	const responsive: ResponsiveType = {
		desktop: {
			breakpoint: { max: 1920, min: 1024 },
			items: 8,
			slidesToSlide: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 4,
			slidesToSlide: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2,
			slidesToSlide: 1,
		},
	};
	return (
		<Layout.Default>
			{isBirthday && <Event event={EventType.BIRTHDAY} />}
			<div className="min-h-screen flex items-center justify-center py-12">
				<div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center">
					<Animate
						as="h1"
						animation={{
							opacity: [0, 1],
							scale: [0.75, 1],
						}}
						className="text-gray-500 dark:text-white text-5xl sm:text-6xl md:text-6xl lg:text-8xl tracking-tight font-extrabold">
						Hello{' '}
						<span className="inline-block origin-70 hover:(animate-wave)">👋</span>{' '}
						I&apos;m
						<Pill.Standard className="mt-4">Alex Lin</Pill.Standard>
					</Animate>

					<Animate
						as="p"
						animation={{
							opacity: [0, 1],
							scale: [0.75, 1],
						}}
						className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-300 sm:text-lg md:text-xl md:max-w-3xl"
						transition={{
							delay: 0.5,
						}}>
					</Animate>

					<div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4">
						{ACTIONS.map((action, index) => {
							if (action.type !== NavigationItemType.LINK) return null;

							return (
								<Animate
									animation={{
										y: [50, 0],
										opacity: [0, 1],
									}}
									className="w-full sm:w-auto"
									key={index}
									transition={{
										delay: 0.1 * (index + 2) + 0.5,
									}}>
									<Button.Outline href={action.href}>
										{action.icon}
										<span className="md:text-xl">{action.text}</span>
									</Button.Outline>
								</Animate>
							);
						})}
					</div>
				</div>
			</div>

			<Animate
				as="p"
				animation={{
					opacity: [0, 1],
					scale: [0.75, 1],
				}}
				className="fixed bottom-0 left-0 w-full"
				transition={{
					delay: 1.5,
				}}>
				<Carousel
					responsive={responsive}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={800}
					keyBoardControl={true}
					transitionDuration={0}
					containerClass="carousel-container"
					itemClass="carousel-item"
					showDots={false}>
					{skills.map((skill) => {
						return (
							<Button.Icon key={skill.name}>
								<Image
									src={skill.icon}
									alt={skill.name}
									width={160}
									height={40}
									className="rounded-half"
									style={{ borderRadius: '5px' }}
								/>
								<span style={{ fontSize: '150%' }}>{skill.name}</span>
							</Button.Icon>
						);
					})}
				</Carousel>
			</Animate>
		</Layout.Default>
	);
}
