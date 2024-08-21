'use client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import styles from './OptInSection.module.scss';
import Field from '@/components/ui/form/field/Field';
import Image from 'next/image';
import { Button } from '@/components/ui/button/Button';

export function OptInSection() {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({ mode: 'onChange' });
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);

		reset();
	};
	return (
		<section className={styles.section}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<div className="text-center">
					<p className="pb-[30px] text-4xl font-bold uppercase">Join Hydra</p>
					<Image src="/images/Vector16.png" alt="line" width={414} height={5} />
					<p className="pt-5 text-4xl">Let&apos;s Build Your VR Experience</p>
				</div>
				<div className="text-center">
					<div className="grid w-[1058px] grid-cols-2 gap-2.5">
						<Field
							{...register('firstName')}
							placeholder="First Name"
							error={errors?.firstName?.message?.toString()}
							label="First name"
						/>
						<Field
							{...register('lastName')}
							placeholder="Last name"
							error={errors.lastName?.message?.toString()}
							label="Last Name"
						/>
						<Field
							{...register('email')}
							placeholder="Email"
							error={errors?.email?.message?.toString()}
							label="Email"
						/>
						<Field
							{...register('phone')}
							placeholder="Phone Number"
							error={errors.phone?.message?.toString()}
							label="Phone Number"
						/>
						<Field
							{...register('subject')}
							placeholder="Subject"
							error={errors.subject?.message?.toString()}
							label="subject"
							className="col-span-2"
						/>
						<div className="col-span-2">
							<textarea
								className={
									'h-[210px] w-full resize-none rounded-[40px] border border-white bg-transparent p-5 outline-none'
								}
								placeholder={'Tell Us Something'}
								{...register('message', {
									required: 'Message is require field!',
								})}
							/>
							<div className={'mb-2 h-4'}>
								{errors.message && (
									<div className={styles.error}>
										{errors.message?.message?.toString()}
									</div>
								)}
							</div>
						</div>
					</div>
					<Button className="mt-[51px]" type="submit">
						Send to Hydra
					</Button>
				</div>
			</form>
		</section>
	);
}
