'use client';
import Arrow from '@/assets/icons/arrow-small-right.svg';
import styles from '../ProcessSection.module.scss';
import ArrowLeft from '@/assets/icons/left-arrow.svg';
import ArrowRight from '@/assets/icons/right-arrow.svg';
import { RoundButton } from '@/components/ui/round-button/RoundButton';
import { useState } from 'react';
import clsx from 'clsx';

const steps = [
	{
		step: '01',
		description: '3D Conception & Design',
	},
	{
		step: '02',
		description: 'Interaction Design',
	},
	{
		step: '03',
		description: 'VR World User Testing',
	},
	{
		step: '04',
		description: 'Hydra VR Deploy',
	},
];

export function ProcessSteps() {
	const [active, setActive] = useState(0);
	function handleClick(direction: 'left' | 'right') {
		if (direction === 'left') {
			if (active === 0) {
				setActive(steps.length - 1);
			} else {
				setActive(active - 1);
			}
		} else {
			if (active === steps.length - 1) {
				setActive(0);
			} else {
				setActive(active + 1);
			}
		}
	}

	return (
		<div className="relative mx-auto mt-[37px] grid justify-items-center gap-4 xl:mt-[100px] xl:grid-cols-4 xl:justify-items-start">
			{steps.map(({ step, description }, index) => (
				<div
					key={step}
					className={clsx('flex flex-col items-center justify-center', {
						'hidden xl:block': index !== active,
						block: index === active,
					})}
				>
					<div className={styles.step}>
						<div className="">{step}</div>
					</div>
					<div className="mt-[37px] flex items-center justify-start xl:mt-[25px]">
						<Arrow className="hidden h-[67px] w-[67px] xl:block" />
						<p className="w-[200px] text-wrap text-center text-2xl font-bold xl:text-start">
							{description}
						</p>
					</div>
				</div>
			))}
			<RoundButton
				className="absolute bottom-0 left-0 -mt-[22px] xl:hidden"
				onClick={() => handleClick('left')}
			>
				<ArrowLeft />
			</RoundButton>
			<RoundButton
				className="absolute bottom-0 right-0 -mt-[22px] xl:hidden"
				onClick={() => handleClick('right')}
			>
				<ArrowRight />
			</RoundButton>
		</div>
	);
}
