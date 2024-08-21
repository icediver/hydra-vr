import { forwardRef, useState } from 'react';

import { IField } from './field.interface';
import clsx from 'clsx';

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ label, placeholder, error, className, type = 'text', style, ...rest },
		ref
	) => {
		return (
			<div className={className}>
				<input
					ref={ref}
					placeholder={placeholder}
					type={type}
					{...rest}
					className={clsx(
						'h-[72px] w-full rounded-full border border-white bg-transparent py-1 pl-8 outline-none'
					)}
				/>

				<div className="h-3 text-end text-sm text-red-500">{error}</div>
			</div>
		);
	}
);

Field.displayName = 'Field';

export default Field;
