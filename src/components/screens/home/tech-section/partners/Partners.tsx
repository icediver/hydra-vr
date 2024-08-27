'use client';
import { Slider } from '@/components/ui/slider/Slider';
import { PartnerItem } from './partner-item/PartnerItem';

const partners = [
	{
		src: '/images/Hydra-Tech11.png',
		width: 174,
		height: 174,
	},
	{
		src: '/images/Hydra-Tech21.png',
		width: 252,
		height: 252,
	},
	{
		src: '/images/Hydra-Tech31.png',
		width: 263,
		height: 263,
	},
	{
		src: '/images/Hydra-Tech41.png',
		width: 282,
		height: 282,
	},
];

export function Partners() {
	return (
		<Slider
			Item={PartnerItem}
			data={partners}
			className="relative mx-auto grid h-[220px] w-[378px] xl:mt-[75px] xl:w-full xl:grid-cols-4 xl:justify-end"
		/>
	);
}
