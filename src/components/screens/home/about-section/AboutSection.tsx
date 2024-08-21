import styles from './AboutSection.module.scss';
import LargeArrow from '@/assets/icons/big-arrow.svg';

export function AboutSection() {
	return (
		<section className={styles.section}>
			<div className="mx-auto flex w-[1275px] justify-between">
				<div className="flex gap-4">
					<div>
						<p className="text-4xl font-bold">INTRODUCTION</p>
						<p className="mt-4 text-4xl">TO HYDRA VR?</p>
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
			<div className="mx-auto mt-[97px] flex w-[1275px] justify-between">
				<div className={styles.image}></div>
				<div className="flex w-[630px] flex-col justify-center gap-4">
					<div>
						<p className="text-4xl font-bold">ABOUT</p>
						<p className="mt-4 text-4xl">HYDRA VR</p>
					</div>
					<p className="w-[653px]">
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
				</div>
			</div>
		</section>
	);
}
