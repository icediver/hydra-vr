import Image from 'next/image';

import Facebook from '@/assets/icons/facebook.svg';
import Instagram from '@/assets/icons/instagram.svg';
import Linkedin from '@/assets/icons/linkedin.svg';
import Pinterest from '@/assets/icons/pinterest.svg';
import Twitter from '@/assets/icons/twitter.svg';
import Youtube from '@/assets/icons/youtube.svg';
import { Button } from '@/components/ui/button/Button';
import Link from 'next/link';
import clsx from 'clsx';

const leftColumn = [
	{ title: 'About', url: '/about' },
	{ title: 'Services', url: '/services' },
	{ title: 'Technologies', url: '/technologies' },
	{ title: 'how to use', url: '/how-to' },
	{ title: 'join Hydra', url: '/join-hydra' },
];

const rightColumn = [
	{ title: 'F.A.Q', url: '/faq' },
	{ title: 'Site Map', url: '/map' },
	{ title: 'Conditions', url: '/conditions' },
	{ title: 'Licenses', url: '/licenses' },
];

export function Footer() {
	return (
		<div
			className={clsx(
				"xl:bg-[url('/images/Vector17.png' )] absolute bottom-[59px] flex w-full flex-col xl:h-[340px]",
				'items-center justify-between bg-[bottom_49px_left_0px] bg-no-repeat px-[84px]'
			)}
		>
			<div className="grid items-center justify-items-center xl:grid-cols-4 xl:justify-items-start">
				<Image
					src="/images/logo.png"
					alt="logo"
					width={185}
					height={185}
					className="h-[185px] w-[185px]"
				/>
				<ul className="hidden uppercase xl:block">
					{leftColumn.map((item) => (
						<li key={item.title} className="pb-5">
							<Link
								href={item.url}
								className="text-xs font-bold uppercase text-white"
							>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
				<ul className="hidden uppercase xl:block">
					{rightColumn.map((item) => (
						<li key={item.title} className="pb-5">
							<Link
								href={item.url}
								className="text-xs font-bold uppercase text-white"
							>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
				<div className="text-center">
					<p className="pb-10 font-bold uppercase">Socialize with hydra</p>
					<div className="flex gap-5 pb-12 [&>svg]:h-8 [&>svg]:w-8 [&>svg]:cursor-pointer">
						<Facebook className="transition-all duration-300 hover:scale-105 hover:brightness-200" />
						<Twitter className="transition-all duration-300 hover:scale-105 hover:brightness-200" />
						<Linkedin className="transition-all duration-300 hover:scale-105 hover:brightness-200" />
						<Youtube className="transition-all duration-300 hover:scale-105 hover:brightness-200" />
						<Instagram className="transition-all duration-300 hover:scale-105 hover:brightness-200" />
						<Pinterest className="transition-all duration-300 hover:scale-105 hover:brightness-200" />
					</div>
					<Button>Build your World</Button>
				</div>
			</div>
			<p className="mx-auto mt-[99px]">
				2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
			</p>
		</div>
	);
}
