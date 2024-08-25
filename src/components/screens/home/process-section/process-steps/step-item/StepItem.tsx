import { ISliderItem } from '@/components/ui/slider/Slider';
import Arrow from '@/assets/icons/arrow-small-right.svg';
import styles from '../../ProcessSection.module.scss';
import clsx from 'clsx';

interface IStepItem extends ISliderItem {
	title: string;
	description: string;
}

export function StepItem({ title, description, active, index }: IStepItem) {
	return (
		<div
			key={title}
			className={clsx('flex flex-col items-center justify-center', {
				'hidden xl:block': index !== active,
				block: index === active,
			})}
		>
			<div className={styles.step}>
				<div className="">{title}</div>
			</div>
			<div className="mt-[37px] flex items-center justify-start xl:mt-[25px]">
				<Arrow className="hidden h-[67px] w-[67px] xl:block" />
				<p className="w-[200px] text-wrap text-center text-2xl font-bold xl:text-start">
					{description}
				</p>
			</div>
		</div>
	);
}
