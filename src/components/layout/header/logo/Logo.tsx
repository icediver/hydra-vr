import Image from 'next/image';

export function Logo() {
	return (
		<div className="flex items-center gap-4">
			<Image
				src="/images/logo.png"
				alt="logo"
				width={103}
				height={103}
				className="h-[70px] w-[70px] xl:h-[103px] xl:w-[103px]"
			/>
			<Image
				src="/images/name.png"
				alt="logo"
				width={76}
				height={46}
				className="h-[28px] w-[46px] xl:h-[46px] xl:w-[76px]"
			/>
		</div>
	);
}
