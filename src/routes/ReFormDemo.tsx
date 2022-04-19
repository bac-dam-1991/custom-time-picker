import { Field } from '../reform/Field';
import { FieldLabel } from '../reform/FieldLabel';
import { Form } from '../reform/Form';
import { useForm } from '../reform/hooks/useForm';
import { FormValues } from '../reform/interfaces/FormValues';

export const ReFormDemo = () => {
	const handleSubmit = (formValues: FormValues) => {
		alert(JSON.stringify(formValues, null, 2));
	};

	const [form] = useForm({
		initialValues: {
			givenName: 'Bac',
			familyName: 'Dam',
			agreed: false,
			favouriteColour: '#fefefe',
			gender: 'other',
		},
	});

	return (
		<div className="root-container">
			<Form onSubmit={handleSubmit} form={form}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
					<Field name="givenName">
						<FieldLabel>Given name</FieldLabel>
						<input />
					</Field>

					<Field name="familyName">
						<FieldLabel>Family name</FieldLabel>
						<input />
					</Field>

					<Field name="agreed" orientation="row">
						<input type="checkbox" />
						<FieldLabel>Terms and conditions</FieldLabel>
					</Field>

					<Field name="gender">
						<FieldLabel>Gender</FieldLabel>
						<select>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
					</Field>

					<Field name="favouriteColour">
						<FieldLabel>Favourite colour</FieldLabel>
						<input type="color" />
					</Field>

					<button type="submit">Submit</button>
				</div>
			</Form>
		</div>
	);
};
