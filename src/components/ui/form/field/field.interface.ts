import { InputHTMLAttributes } from 'react';

export interface IFieldProps {
	placeholder?: string;
	error?: string;
	label?: string;
	className?: string;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends TypeInputPropsField {}
