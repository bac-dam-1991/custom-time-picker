import { TimePicker } from '../components/TimePicker';
import { useForm } from 'react-hook-form';
import { Button } from '../components/Button';
import { Form } from '../components/Form';
import { FormRow } from '../components/FormRow';
import { useMediaQuery } from '../hooks/useMediaQuery';

export interface ShiftFormFields {
	startTime: string;
	endTime: string;
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
	const matchMd = useMediaQuery({ direction: 'up', breakpoint: 'md' });

	const { handleSubmit, setValue } = useForm<ShiftFormFields>({
		defaultValues: {
			startTime: '09:00:00',
			endTime: '17:00:00',
		},
	});

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<h3>{title}</h3>
			<h4>{subtitle}</h4>
			<FormRow style={{ flexDirection: matchMd ? 'row' : 'column' }}>
				<TimePicker
					onTimeChange={(value) => setValue('startTime', value)}
					label="Start time"
					defaultAmPm="AM"
					defaultHour="09"
					defaultMinute="30"
				/>

				<TimePicker
					onTimeChange={(value) => setValue('endTime', value)}
					label="End time"
					defaultAmPm="PM"
					defaultHour="05"
					defaultMinute="00"
				/>
			</FormRow>
			<FormRow>
				<Button type="submit">Submit</Button>
			</FormRow>
		</Form>
	);
};
