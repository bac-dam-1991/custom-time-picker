import { Checkable } from '../components/Checkable';
import { Field } from '../reform/Field';
import { FieldGroup } from '../reform/FieldGroup';
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
			attributes: {
				languages: ['java'],
			},
			legal: {
				agreed: true,
			},
			atsi: 'aboriginal',
			gender: 'other',
			other: {
				preferences: {
					favouriteColour: '#ffffff',
				},
			},
		},
	});

	return (
		<div className="root-container">
			<Form onSubmit={handleSubmit} form={form}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
					<Field name={['givenName']}>
						<FieldLabel>Given name</FieldLabel>
						<input />
					</Field>

					<Field name={['familyName']}>
						<FieldLabel>Family name</FieldLabel>
						<input />
					</Field>

					<Field name={['legal', 'agreed']} orientation="row">
						<input type="checkbox" />
						<FieldLabel>Terms and conditions</FieldLabel>
					</Field>

					<FieldGroup name={['attributes', 'languages']} multiple>
						<FieldLabel>Languages</FieldLabel>
						<Checkable type="checkbox" value="javascript" label="Javascript" />
						<Checkable type="checkbox" value="java" label="Java" />
						<Checkable type="checkbox" value="csharp" label="C#" />
					</FieldGroup>

					<FieldGroup name="atsi">
						<FieldLabel>ATSI</FieldLabel>
						<Checkable type="radio" value="aboriginal" label="Aboriginal" />
						<Checkable
							type="radio"
							value="torres-strait-islander"
							label="Torres Strait Islander"
						/>
						<Checkable type="radio" value="none" label="None" />
					</FieldGroup>

					<Field name="gender">
						<FieldLabel>Gender</FieldLabel>
						<select>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
					</Field>

					<Field name={['other', 'preferences', 'favouriteColour']}>
						<FieldLabel>Favourite colour</FieldLabel>
						<input type="color" />
					</Field>

					<button type="submit">Submit</button>
				</div>
			</Form>
		</div>
	);
};
