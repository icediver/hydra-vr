'use client';
import {
	IServiceCard,
	ServiceCard,
} from '@/components/ui/service-card/ServiceCard';
import { Slider } from '@/components/ui/slider/Slider';
import { useState } from 'react';

const services: Omit<IServiceCard, 'handleClick' | 'active' | 'index'>[] = [
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
	return (
		<Slider
			Item={ServiceCard}
			data={services}
			className="mb-[112px] mt-[26px] grid w-[378px] justify-center gap-3 xl:mt-[100px] xl:w-full xl:grid-cols-4"
		/>
	);
}
