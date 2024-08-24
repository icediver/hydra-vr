'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import ArrowLeft from '@/assets/icons/left-arrow.svg';
import ArrowRight from '@/assets/icons/right-arrow.svg';
import { RoundButton } from '@/components/ui/round-button/RoundButton';

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
	const [active, setActive] = useState(0);
	function handleClick(direction: 'left' | 'right') {
		if (direction === 'left') {
			if (active === 0) {
				setActive(partners.length - 1);
			} else {
				setActive(active - 1);
			}
		} else {
			if (active === partners.length - 1) {
				setActive(0);
			} else {
				setActive(active + 1);
			}
		}
	}
	return (
		<div className="relative mx-auto grid h-[220px] w-[340px] xl:mt-[75px] xl:w-full xl:grid-cols-4 xl:justify-end">
			{partners.map((partner, index) => (
				<Image
					key={index}
					src={partner.src}
					alt="Hydra-tech"
					width={partner.width}
					height={partner.height}
					className={clsx('image mx-auto w-[190px] xl:mx-0 xl:w-[250px]', {
						'hidden xl:block': index !== active,
						block: index === active,
					})}
				/>
			))}
			<RoundButton
				className="absolute left-0 top-1/2 -mt-[22px] xl:hidden"
				onClick={() => handleClick('left')}
			>
				<ArrowLeft />
			</RoundButton>
			<RoundButton
				className="absolute right-0 top-1/2 -mt-[22px] xl:hidden"
				onClick={() => handleClick('right')}
			>
				<ArrowRight />
			</RoundButton>
		</div>
	);
}
