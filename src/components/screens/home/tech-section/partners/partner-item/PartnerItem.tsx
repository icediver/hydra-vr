import { ISliderItem } from '@/components/ui/slider/Slider';
import clsx from 'clsx';
import Image from 'next/image';

interface IPartnerItem extends ISliderItem {
	src: string;
	width: number;
	height: number;
}

export function PartnerItem({
	index,
	active,
	src,
	width,
	height,
}: IPartnerItem) {
	return (
		<Image
			key={index}
			src={src}
			alt="Hydra-tech"
			width={width}
			height={height}
			className={clsx('image mx-auto w-[190px] xl:mx-0 xl:w-[250px]', {
				'hidden xl:block': index !== active,
				block: index === active,
			})}
		/>
	);
}
