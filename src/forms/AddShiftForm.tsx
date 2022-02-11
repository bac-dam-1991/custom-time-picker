import { ShiftForm, ShiftFormFields } from './ShiftForm';

export const AddShiftForm = () => {
	const onSubmit = async (formData: ShiftFormFields) => {
		alert(JSON.stringify(formData, null, 2));
	};

	return (
		<ShiftForm
			onSubmit={onSubmit}
			title="Add a shift"
			subtitle="This form has no default values."
		/>
	);
};
