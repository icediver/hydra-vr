import { Button } from '@/components/ui/button/Button';
import Arrow from '@/assets/icons/arrow-small-right.svg';
import styles from './HeroSection.module.scss';
import { HeroActions } from './hero-actions/HeroActions';
interface IHeroSection {}

export function HeroSection({}: IHeroSection) {
	return (
		<section className={styles.section}>
			<div className="relative top-[134px] flex w-full justify-center xl:top-[265px] xl:justify-start">
				<div className={'mt-[340px] xl:mt-0 xl:pb-[54px] xl:pt-[34px]'}>
					<p className="text-2xl font-bold text-white xl:text-[40px]">
						<span className="text-4xl font-bold text-[#8176AF] xl:text-5xl">
							Dive
						</span>{' '}
						Into The Depths
					</p>
					<p className="text-2xl font-bold text-white xl:text-[40px]">
						Of{' '}
						<span className="text-4xl text-[#C0B7E8] xl:text-5xl">
							Virtual Reality
						</span>
					</p>
					<p className="mt-[35px] hidden w-[450px] text-wrap pb-[67px] xl:block">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
						Lectus mauris eros in vitae .
					</p>
					<div className="mt-9 flex items-center justify-center gap-9 xl:mt-0 xl:justify-start">
						<Button className="w-full xl:w-auto">Build your Word</Button>
						<Arrow
							className={
								'hidden h-[100px] w-[100px] cursor-pointer transition-all duration-300 hover:scale-110 active:translate-y-1 xl:block'
							}
						/>
					</div>
				</div>
				<div className={styles.imageBorder}>
					<div className={styles.image} />
				</div>
			</div>
			<HeroActions />
		</section>
	);
}
