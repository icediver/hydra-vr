'use client';
import styles from '../HeroSection.module.scss';
import Location from '@/assets/icons/location.svg';
import Phone from '@/assets/icons/phone-calls.svg';
import Email from '@/assets/icons/mail.svg';
import LeftArrow from '@/assets/icons/circle-left.svg';
import RightArrow from '@/assets/icons/circle-right.svg';
import { useState } from 'react';
import clsx from 'clsx';

interface IHeroActions {
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
	title: string;
	description: string;
	size: number;
}

const actions: IHeroActions[] = [
	{
		Icon: Location,
		title: 'Location',
		description: 'Union St, Seattle, WA 98101, United States',
		size: 70,
	},
	{
		Icon: Phone,
		title: 'Call Us',
		description: '(110) 1111-1010',
		size: 50,
	},
	{
		Icon: Email,
		title: 'Email Us',
		description: 'Contact@HydraVTech.com',
		size: 60,
	},
];

export function HeroActions() {
	const [active, setActive] = useState(0);
	function handleClick(direction: 'left' | 'right') {
		if (direction === 'left') {
			if (active === 0) {
				setActive(actions.length - 1);
			} else {
				setActive(active - 1);
			}
		} else {
			if (active === actions.length - 1) {
				setActive(0);
			} else {
				setActive(active + 1);
			}
		}
	}

	return (
		<footer className={styles.footer}>
			<LeftArrow
				className="mr-2.5 h-[30px] w-[30px] xl:hidden"
				onClick={() => handleClick('left')}
			/>
			<ul className="flex w-full justify-between">
				{actions.map(({ Icon, title, description }, index) => (
					<li
						key={title}
						className={clsx(
							'flex w-[250px] items-center gap-5 border-[#C0B7E8] last:border-none',
							'xl:h-[117px] xl:w-[370px] xl:border-r xl:first:w-[400px]',
							{
								['hidden xl:flex']: index !== active,
							}
						)}
					>
						<Icon
							style={{
								width: `${actions[index].size}px`,
								height: `${actions[index].size}px`,
							}}
						/>
						<div>
							<p className="hidden text-2xl font-bold xl:block">{title}</p>
							<p className="text-sm">{description}</p>
						</div>
					</li>
				))}
			</ul>
			<RightArrow
				className="ml-2.5 h-[30px] w-[30px] xl:hidden"
				onClick={() => handleClick('right')}
			/>
		</footer>
	);
}
