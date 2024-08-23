'use client';
import { useState } from 'react';
import { ContactButtons } from './contact-buttons/ContactButtons';
import { Hamburger } from './hamburger/Hamburger';
import { Logo } from './logo/Logo';
import { MenuList } from './menu-list/MenuList';
import clsx from 'clsx';

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header
			className={clsx('absolute left-0 z-50 w-full', {
				['bottom-0 right-0 top-0 w-full overflow-hidden bg-[var(--main-background)] transition-colors duration-500']:
					isOpen,
			})}
		>
			<div className="relative top-[25px] mx-auto flex w-[390px] items-center justify-between px-6 xl:top-[50px] xl:w-full xl:px-[84px]">
				<Logo />
				<MenuList />
				<ContactButtons />
				<Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
			{isOpen && <MenuList variant="mobile" />}
		</header>
	);
}
