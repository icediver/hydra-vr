'use client';
import ArrowLeft from '@/assets/icons/left-arrow.svg';
import ArrowRight from '@/assets/icons/right-arrow.svg';
import { RoundButton } from '@/components/ui/round-button/RoundButton';
import clsx from 'clsx';
import { useState } from 'react';
import React from 'react';

export interface ISliderItem {
	active: number;
	index: number;
}
export interface ISlider extends React.HTMLAttributes<HTMLDivElement> {
	Item: (props: ISliderItem & any) => JSX.Element;
	data: Omit<ISliderItem, 'index' | 'active'>[];
	leftButtonClasses?: string;
	rightButtonClasses?: string;
}

export function Slider(props: ISlider) {
	const {
		Item,
		data,
		leftButtonClasses,
		rightButtonClasses,
		className,
		...rest
	} = props;
	const [active, setActive] = useState(0);
	function handleClick(direction: 'left' | 'right') {
		if (direction === 'left') {
			if (active === 0) {
				setActive(data.length - 1);
			} else {
				setActive(active - 1);
			}
		} else {
			if (active === data.length - 1) {
				setActive(0);
			} else {
				setActive(active + 1);
			}
		}
	}

	return (
		<div
			className={clsx('relative mx-auto w-[378px] xl:w-full', className)}
			{...rest}
		>
			{data.map((props, index) => (
				<Item
					key={index + new Date().getTime()}
					{...props}
					active={active}
					index={index}
				/>
			))}
			<RoundButton
				className={clsx(
					'absolute bottom-0 left-0 top-1/2 -mt-[22px] xl:hidden',
					leftButtonClasses
				)}
				onClick={() => handleClick('left')}
			>
				<ArrowLeft />
			</RoundButton>
			<RoundButton
				className={clsx(
					'absolute bottom-0 right-0 top-1/2 -mt-[22px] xl:hidden',
					rightButtonClasses
				)}
				onClick={() => handleClick('right')}
			>
				<ArrowRight />
			</RoundButton>
		</div>
	);
}
