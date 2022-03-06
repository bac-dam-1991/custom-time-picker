import { ShiftForm, ShiftFormFields } from './ShiftForm';

export const UpdateShiftForm = () => {
	const onSubmit = async (formData: ShiftFormFields) => {
		alert(JSON.stringify(formData, null, 2));
	};

	return (
		<ShiftForm
			title="Update shift"
			subtitle="This form has default values."
			onSubmit={onSubmit}
			defaultValues={{
				startTime: '09:00:00',
				endTime: '17:00:00',
			}}
		/>
	);
};
