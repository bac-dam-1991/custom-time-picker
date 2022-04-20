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
			languages: ['java'],
			givenName: 'Bac',
			familyName: 'Dam',
			agreed: true,
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

					<FieldGroup name="languages">
						<FieldLabel>Languages</FieldLabel>
						<Checkbox value="javascript" label="Javascript" />
						<Checkbox value="java" label="Java" />
						<Checkbox value="csharp" label="C#" />
					</FieldGroup>

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

const Checkbox = ({
	value,
	label,
	onChange,
	checked,
}: {
	onChange?: (value: string) => void;
	label: string;
	value: string;
	checked?: boolean;
}) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
			<input
				type="checkbox"
				value={value}
				checked={checked}
				id={value}
				onChange={() => onChange?.(value)}
			/>
			<label htmlFor={value}>{label}</label>
		</div>
	);
};
