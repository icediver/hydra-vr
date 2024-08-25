'use client';
import { Slider } from '@/components/ui/slider/Slider';
import { StepItem } from './step-item/StepItem';

const steps = [
	{
		title: '01',
		description: '3D Conception & Design',
	},
	{
		title: '02',
		description: 'Interaction Design',
	},
	{
		title: '03',
		description: 'VR World User Testing',
	},
	{
		title: '04',
		description: 'Hydra VR Deploy',
	},
];

export function ProcessSteps() {
	return (
		<Slider
			Item={StepItem}
			data={steps}
			rightButtonClasses="top-[85%]"
			leftButtonClasses="top-[85%]"
			className="mx-auto mt-[37px] grid justify-items-center gap-4 xl:mt-[100px] xl:w-full xl:grid-cols-4 xl:justify-items-start"
		/>
	);
}
