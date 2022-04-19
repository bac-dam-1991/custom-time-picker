import { createContext, ReactNode, useContext } from 'react';

export type FormValue = string | number | boolean;

export interface FormValues {
	[key: string]: FormValue;
}

export interface FormChangeHandler {
	value: FormValue;
	name: string;
}

export interface FormContextProps {
	values: FormValues;
	onChange: (value: FormChangeHandler) => void;
}

export const FormContext = createContext<FormContextProps>({
	values: {},
	onChange: (value: FormChangeHandler) => {},
});

export interface FormProviderProps {
	children: ReactNode;
}

export const useFormContext = () => useContext(FormContext);
