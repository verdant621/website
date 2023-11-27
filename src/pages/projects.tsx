import { Layout } from '~/layouts';
import { Animate, List } from '~/components';
import { ListActionType } from '~/types';
import type { GetStaticProps } from 'next';
import type { ListAction, Project } from '~/types';

interface ProjectProps {
	stringifiedProjects: string;
}

export const getStaticProps: GetStaticProps<ProjectProps> = () => {
	const projects = [
		{
			description:
				'Processing System Real-Time Audio-Audio translation and Deepface - LipSync System',
			icon: '🤝',
			homepage: 'https://home.speaksynk.com/',
			name: 'SpeakSync Website',
			post: undefined,
			template: false,
			url: '',
		},
		{
			description:
				'Trade Planing Helps using Several Time seriecs Prediction and Other Technologies.',
			icon: '🌴',
			homepage: 'https://www.tradeplans.ai/',
			name: 'Trade Plan Website',
			post: undefined,
			template: false,
			url: '',
		},
		{
			description:
				'A smart Chinese Chat platform, Updated using Encoder and Other NLP Technologies.',
			icon: '🍽️',
			homepage: 'https://github.com/Alex621Lin/GPT2-Chinese',
			name: 'Chinese Help System',
			post: undefined,
			template: false,
			url: '',
		},
		{
			description: 'AI resume Building and Help recruiting System',
			icon: '💦',
			homepage: 'https://www.workruit.com/',
			name: 'Work Recruit Help System',
			post: undefined,
			template: false,
			url: '',
		},
		{
			description: 'NFT Marketplace on Pulse chain',
			icon: '🪙',
			homepage: 'https://nftonpulse.io/',
			name: 'NFTonPulse',
			post: undefined,
			template: false,
			url: '',
		},
		{
			description: 'Computer based services and corporate trainings online/offline.',
			icon: '🏢',
			homepage: 'https://ether-channels-business.vercel.app/',
			name: 'Etherchanel solution service',
			post: undefined,
			template: false,
			url: '',
		},
	];

	return {
		props: {
			stringifiedProjects: JSON.stringify(projects),
		},
		revalidate: 3600,
	};
};

export default function ProjectsPage({ stringifiedProjects }: ProjectProps): JSX.Element {
	const projects = JSON.parse(stringifiedProjects) as Array<Project>;

	return (
		<Layout.Default seo={{ title: 'Projects' }}>
			<div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8">
				<div className="relative max-w-xl mx-auto">
					<List.Container>
						{projects.map((project, index) => (
							<Animate
								animation={{ y: [50, 0], opacity: [0, 1] }}
								key={index}
								transition={{
									delay: 0.1 * index,
								}}>
								<List.Item
									actions={[
										...(project.post
											? [
													{
														type: ListActionType.LINK,
														external: false,
														href: project.post,
														icon: 'feather:edit-3',
														label: `Blog post about ${project.name}`,
													} as ListAction,
											  ]
											: []),
										...(project.homepage
											? [
													{
														type: ListActionType.LINK,
														href: project.homepage,
														icon: 'feather:home',
														label: `${project.name} homepage`,
													} as ListAction,
											  ]
											: [])
									]}
									description={project.description}
									icon={<span className="text-xl">{project.icon}</span>}
									title={project.name}
								/>
							</Animate>
						))}
					</List.Container>
				</div>
			</div>
		</Layout.Default>
	);
}