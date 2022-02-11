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
				endHour: '05',
				endMin: '30',
				startHour: '09',
				startMin: '00',
			}}
		/>
	);
};
