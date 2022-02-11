import { TimePicker } from '../components/TimePicker';
import { useForm } from 'react-hook-form';
import { Button } from '../components/Button';
import { Form } from '../components/Form';
import { FormRow } from '../components/FormRow';

export interface ShiftFormFields {
	startHour: string;
	startMin: string;
	endHour: string;
	endMin: string;
}

export interface ShiftFormProps {
	onSubmit: (formData: ShiftFormFields) => Promise<void>;
	title?: string;
	subtitle?: string;
	defaultValues?: ShiftFormFields;
}

export const ShiftForm = ({
	onSubmit,
	defaultValues,
	subtitle,
	title,
}: ShiftFormProps) => {
	const { register, handleSubmit } = useForm<ShiftFormFields>({
		defaultValues,
	});

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<h3>{title}</h3>
			<h4>{subtitle}</h4>
			<FormRow>
				<TimePicker
					label="Start time"
					hourSelectProps={{ ...register('startHour') }}
					minuteSelectProps={{ ...register('startMin') }}
				/>
				<TimePicker
					label="End time"
					hourSelectProps={{ ...register('endHour') }}
					minuteSelectProps={{ ...register('endMin') }}
				/>
			</FormRow>
			<FormRow>
				<Button type="submit">Submit</Button>
			</FormRow>
		</Form>
	);
};
