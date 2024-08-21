import clsx from 'clsx';
import styles from './ServicesSection.module.scss';
import LargeArrow from '@/assets/icons/big-arrow.svg';
import {
	IServiceCard,
	ServiceCard,
} from '@/components/ui/service-card/ServiceCard';

const services: IServiceCard[] = [
	{
		image: '/images/services1.png',
		title: 'simulation',
		description:
			'Vitae sapien pellentesque habitant morbi munc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
		link: '/services/simulation',
	},
	{
		image: '/images/services2.png',
		title: 'education',
		description:
			'Vitae sapien pellentesque habitant morbi munc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
		link: '/services/education',
	},
	{
		image: '/images/services3.png',
		title: 'self-care',
		description:
			'Vitae sapien pellentesque habitant morbi munc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
		link: '/services/self-care',
	},
	{
		image: '/images/services4.png',
		title: 'outdoor',
		description:
			'Vitae sapien pellentesque habitant morbi munc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
		link: '/services/outdoor',
	},
];

export function ServicesSection() {
	return (
		<section className={clsx('mt-[100px]', styles.section)}>
			<div className="mx-auto flex w-[1275px] justify-between">
				<div className="flex gap-4">
					<div>
						<p className="text-4xl font-bold">WHY BUILD</p>
						<p className="mt-4 text-4xl">WITH HYDRA?</p>
					</div>
					<LargeArrow className="relative -bottom-[25px] h-[100px] w-[228px] place-items-end" />
				</div>
				<p className="w-[653px]">
					Vitae sapien pellentesque habitant morbi tristique senectus et netus
					et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
					amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
					aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
					Lectus magna fringilla urna porttitor rhoncus vitae.
				</p>
			</div>
			<div className="mb-[112px] mt-[100px] grid grid-cols-4 gap-3">
				{services.map((service) => (
					<ServiceCard
						key={service.title}
						image={service.image}
						title={service.title}
						description={service.description}
						link={service.link}
					/>
				))}
			</div>
		</section>
	);
}
