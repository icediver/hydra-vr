import { Button } from '@/components/ui/button/Button';
import styles from './AboutSection.module.scss';
import LargeArrow from '@/assets/icons/big-arrow.svg';

export function AboutSection() {
	return (
		<section className={styles.section}>
			<div className="mx-auto flex justify-between xl:w-[1275px]">
				<div className="flex gap-4">
					<div>
						<p className="text-4xl font-bold">INTRODUCTION</p>
						<p className="mt-4 text-4xl">TO HYDRA VR?</p>
					</div>
					<LargeArrow className="relative -bottom-[25px] hidden h-[100px] w-[228px] place-items-end xl:block" />
				</div>
				<p className="hidden xl:block xl:w-[653px]">
					Vitae sapien pellentesque habitant morbi tristique senectus et netus
					et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
					amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
					aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
					Lectus magna fringilla urna porttitor rhoncus vitae.
				</p>
			</div>
			<div className="mx-auto mt-[36px] flex flex-col justify-between xl:mt-[97px] xl:w-[1275px] xl:flex-row">
				<div className={styles.image} />
				<div className="flex flex-col justify-center gap-4 xl:w-[630px]">
					<div className="hidden xl:block">
						<p className="text-4xl font-bold">ABOUT</p>
						<p className="mt-4 text-4xl">HYDRA VR</p>
					</div>
					<p className="w-[352px] text-wrap pt-[51px] xl:w-[653px]">
						Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
						mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
						dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
						tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
						purus in massa. Est placerat in egestas erat imperdiet sed.
						Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
						etiam erat velit scelerisque in dictum non consectetur a. Laoreet
						sit amet cursus sit amet. Vel eros donec ac odio tempor orci
						dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
						bibendum. Leo a diam sollicitudi n tempor.{' '}
					</p>
					<Button className="mt-[29px] xl:w-[214px]">
						Let&apos;s get in touch
					</Button>
				</div>
			</div>
		</section>
	);
}
