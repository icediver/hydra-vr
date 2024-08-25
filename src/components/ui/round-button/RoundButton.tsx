import clsx from 'clsx';

interface IRoundButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
}

export function RoundButton({ children, className, ...rest }: IRoundButton) {
	return (
		<button
			className={clsx(
				'flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#0E0E0E] transition-transform duration-300 hover:brightness-125 active:translate-y-1',
				className
			)}
			{...rest}
		>
			<div className="gradient flex h-[44px] w-[44px] items-center justify-center rounded-full">
				{children}
			</div>
		</button>
	);
}
