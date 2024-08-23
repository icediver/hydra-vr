import clsx from 'clsx';
import Link from 'next/link';
import { ContactButtons } from '../contact-buttons/ContactButtons';

interface INavList {
	title: string;
	url: string;
}

const menuItems: INavList[] = [
	{ title: 'About', url: '/about' },
	{ title: 'Services', url: '/services' },
	{ title: 'Technologies', url: '/technologies' },
	{ title: 'how to use', url: '/how-to' },
];

interface IMenuList {
	variant?: 'desktop' | 'mobile';
}

export function MenuList({ variant = 'desktop' }: IMenuList) {
	return (
		<nav className={clsx({ 'hidden xl:block': variant === 'desktop' })}>
			<ul
				className={clsx('flex flex-col text-center xl:flex-row', {
					'h-screen text-8xl font-bold': variant === 'mobile',
				})}
			>
				{menuItems.map((item) => (
					<li key={item.title} className={clsx('relative')}>
						<Link
							href={item.url}
							className={clsx(
								'text-xs font-bold uppercase text-white',
								'after:content-"" after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-0 after:rounded-sm after:bg-[#858584] after:transition-all after:duration-300',
								'xl:hover:after:scale-100 xl:hover:after:bg-white'
							)}
						>
							{item.title}
						</Link>
					</li>
				))}
				{variant === 'mobile' && <ContactButtons variant="mobile" />}
			</ul>
		</nav>
	);
}
