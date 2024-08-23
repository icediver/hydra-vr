import { Button } from '@/components/ui/button/Button';
import clsx from 'clsx';

interface IContactButtons {
	variant?: 'mobile' | 'desktop';
}

export function ContactButtons({ variant = 'desktop' }: IContactButtons) {
	return (
		<div
			className={clsx({
				'hidden gap-9 xl:flex': variant === 'desktop',
				'mx-auto mt-9 flex w-[280px] flex-col items-center justify-center gap-9':
					variant === 'mobile',
			})}
		>
			<Button variant="secondary">Contact us</Button>
			<Button>Join Hydra</Button>
		</div>
	);
}
