import clsx from 'clsx';
import Image from 'next/image';
import Shape from '@/assets/icons/shape.svg';

export function TechSection() {
	return (
		<section className="mx-auto h-[630px] w-[1278px]">
			<div
				className={clsx(
					"h-[303px] w-[1278px] rounded-full bg-[url('/images/pexels-rodnae-productions.png')] bg-[left_-150px_bottom_-580px] bg-no-repeat uppercase",
					'relative flex flex-col items-center justify-center text-4xl'
				)}
			>
				<p className="font-bold">Technologies & hardware</p>
				<p>uded by Hydra VR.</p>
				<div
					className={clsx(
						'flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-[#0E0E0E52] active:translate-y-1',
						'absolute -bottom-[50px] transition-all duration-300'
					)}
				>
					<div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-gradient-to-bl from-[rgb(192,183,232)] to-[rgb(129,118,175)]">
						<Shape className="h-[12.5px] w-[25px]" />
					</div>
				</div>
			</div>
			<div className="grid grid-cols-4 items-end">
				<Image
					src="/images/Hydra-Tech11.png"
					alt="Hydra-tech"
					width={174}
					height={174}
				/>
				<Image
					src="/images/Hydra-Tech21.png"
					alt="Hydra-tech"
					width={252}
					height={252}
				/>
				<Image
					src="/images/Hydra-Tech31.png"
					alt="Hydra-tech"
					width={263}
					height={263}
				/>
				<Image
					src="/images/Hydra-Tech41.png"
					alt="Hydra-tech"
					width={282}
					height={282}
				/>
			</div>
		</section>
	);
}
