'use client';
import {
	IServiceCard,
	ServiceCard,
} from '@/components/ui/service-card/ServiceCard';
import { useState } from 'react';

const services: Omit<IServiceCard, 'handleClick'>[] = [
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

export function ServiceCards() {
	const [active, setActive] = useState(0);
	function handleClick(direction: 'left' | 'right') {
		if (direction === 'left') {
			if (active > 0) {
				setActive(active - 1);
			} else {
				setActive(services.length - 1);
			}
		}
		if (direction === 'right') {
			if (active < services.length - 1) {
				setActive(active + 1);
			} else {
				setActive(0);
			}
		}
	}
	return (
		<div className="mb-[112px] mt-[26px] grid justify-center gap-3 xl:mt-[100px] xl:grid-cols-4">
			{services.map((service, index) => (
				<ServiceCard
					key={service.title}
					image={service.image}
					title={service.title}
					description={service.description}
					link={service.link}
					className={index === active ? 'block' : 'hidden xl:block'}
					handleClick={handleClick}
				/>
			))}
		</div>
	);
}
