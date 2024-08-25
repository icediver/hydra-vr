import clsx from 'clsx';
import Shape from '@/assets/icons/shape.svg';
import { Partners } from './partners/Partners';

export function TechSection() {
	return (
		<section className="mx-auto xl:h-[630px] xl:w-[1278px]">
			<div
				className={clsx(
					"mx-auto h-[168px] w-[348px] rounded-full bg-[url('/images/pexels-rodnae-productions.png')] bg-[length:900px_auto] bg-no-repeat uppercase",
					'bg-[left_-230px_bottom_-300px]',
					'xl:h-[303px] xl:w-[1278px] xl:bg-[length:auto_auto] xl:bg-[left_-150px_bottom_-580px]',
					'relative flex flex-col items-center justify-center xl:text-4xl'
				)}
			>
				<p className="font-bold">Technologies & hardware</p>
				<p className="text-2xl xl:text-4xl">used by Hydra VR.</p>
				<div
					className={clsx(
						'hidden h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-[#0E0E0E52] active:translate-y-1 xl:flex',
						'absolute -bottom-[50px] transition-all duration-300'
					)}
				>
					<div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-gradient-to-bl from-[rgb(192,183,232)] to-[rgb(129,118,175)]">
						<Shape className="h-[12.5px] w-[25px]" />
					</div>
				</div>
			</div>
			<Partners />
		</section>
	);
}
