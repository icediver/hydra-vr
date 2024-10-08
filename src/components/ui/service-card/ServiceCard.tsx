import Image from 'next/image';
import styles from './ServiceCard.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import LeftArrow from '@/assets/icons/left-arrow.svg';
import RightArrow from '@/assets/icons/right-arrow.svg';
import { RoundButton } from '../round-button/RoundButton';
import { ISliderItem } from '../slider/Slider';

export interface IServiceCard
	extends React.HTMLAttributes<HTMLDivElement>,
		ISliderItem {
	image: string;
	title: string;
	description: string;
	link: string;
	handleClick: (direction: 'left' | 'right') => void;
}

export function ServiceCard({
	image,
	title,
	description,
	link,
	handleClick,
	className,
	index,
	active,
	...rest
}: IServiceCard) {
	return (
		<div
			className={clsx(
				'relative mx-auto transition-transform duration-300 hover:scale-105 hover:brightness-125',
				index === active ? 'block' : 'hidden xl:block',
				styles.card,
				className
			)}
			{...rest}
		>
			<div className="mx-auto mt-4 flex h-[219px] w-[219px] items-center justify-center rounded-full bg-[#0E0E0E52]">
				<Image src={image} alt={title} width={190} height={190} />
			</div>
			<p className="mb-[18px] mt-[21px] text-center text-2xl font-bold uppercase">
				{title}
			</p>
			<Image
				src={'/images/Vector13.png'}
				alt="link"
				width={154}
				height={29}
				className="mx-auto"
			/>
			<p className="mx-auto mb-9 mt-5 w-[250px] text-wrap text-xs">
				{description}
			</p>
			<div className="text-center">
				<Link href={link} className="primary-btn">
					Try it now
				</Link>
			</div>
		</div>
	);
}
