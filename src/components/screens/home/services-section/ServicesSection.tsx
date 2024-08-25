import clsx from 'clsx';
import styles from './ServicesSection.module.scss';
import LargeArrow from '@/assets/icons/big-arrow.svg';
import { ServiceCards } from './service-cards/ServiceCards';

export function ServicesSection() {
	return (
		<section className={clsx('mt-[60px] xl:mt-[100px]', styles.section)}>
			<div className="mx-auto flex justify-between">
				<div className="mx-auto flex gap-4 xl:mx-0">
					<div>
						<p className="text-4xl font-bold">WHY BUILD</p>
						<p className="mt-4 text-4xl">WITH HYDRA?</p>
					</div>
					<LargeArrow className="relative -bottom-[25px] hidden h-[100px] w-[228px] place-items-end xl:block" />
				</div>
				<p className="hidden w-[653px] xl:block">
					Vitae sapien pellentesque habitant morbi tristique senectus et netus
					et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
					amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
					aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
					Lectus magna fringilla urna porttitor rhoncus vitae.
				</p>
			</div>
			<ServiceCards />
		</section>
	);
}
