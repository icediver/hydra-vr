import clsx from 'clsx';
import Arrow from '@/assets/icons/arrow-small-right.svg';
import LargeArrow from '@/assets/icons/big-arrow.svg';
import styles from './ProcessSection.module.scss';

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

export function ProcessSection() {
	return (
		<section
			className={clsx(
				"mt-[69px] h-[509px] bg-[url('/images/Vector15.png')] bg-[left_bottom_128px] bg-no-repeat",
				styles.section
			)}
		>
			<div className="mx-auto flex w-[1275px] justify-between">
				<div className="flex gap-4">
					<div>
						<p className="text-4xl font-bold">HOW WE BUILD</p>
						<p className="mt-4 text-4xl">WITH HYDRA VR?</p>
					</div>
					<LargeArrow className="relative -bottom-[25px] h-[100px] w-[228px] place-items-end" />
				</div>
				<p className="w-[653px]">
					Vitae sapien pellentesque habitant morbi tristique senectus et netus
					et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
					amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
					aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
					Lectus magna fringilla urna porttitor rhoncus vitae.
				</p>
			</div>
			<div className="relative -bottom-[100px] mx-auto grid w-[1275px] grid-cols-4 content-center justify-items-center gap-4">
				{steps.map(({ step, description }) => (
					<div
						key={step}
						className="flex flex-col items-center justify-center gap-6"
					>
						<div className={styles.step}>
							<div className="">{step}</div>
						</div>
						<div className="flex items-center">
							<Arrow className="h-[67px] w-[67px]" />
							<p className="w-[200px] text-wrap text-2xl font-bold">
								{description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
