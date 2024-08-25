import clsx from 'clsx';
import LargeArrow from '@/assets/icons/big-arrow.svg';
import styles from './ProcessSection.module.scss';
import { ProcessSteps } from './process-steps/ProcessSteps';

export function ProcessSection() {
	return (
		<section
			className={clsx(
				"mt-[69px] bg-[left_bottom_128px] bg-no-repeat xl:w-[1449px] xl:bg-[url('/images/Vector15.png')]",
				styles.section
			)}
		>
			<div className="xl:w-[1375px]">
				<div className="flex justify-between xl:justify-start">
					<div className="mx-auto flex justify-center gap-4 xl:mx-0">
						<div className="">
							<p className="text-center text-2xl font-bold xl:text-4xl">
								HOW WE BUILD
							</p>
							<p className="mt-4 text-2xl xl:text-4xl">WITH HYDRA VR?</p>
						</div>
						<LargeArrow className="relative -bottom-[25px] hidden h-[100px] w-[228px] place-items-end xl:block" />
					</div>
					<p className="hidden w-[653px] xl:block">
						Vitae sapien pellentesque habitant morbi tristique senectus et netus
						et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
						amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
						aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
						in. Lectus magna fringilla urna porttitor rhoncus vitae.
					</p>
				</div>
				<ProcessSteps />
			</div>
		</section>
	);
}
