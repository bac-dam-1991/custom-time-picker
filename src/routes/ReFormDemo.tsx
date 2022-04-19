import { Field } from "../reform/Field";
import { Form } from "../reform/Form";

export const FormRDemo = () => {
  return (
    <div className="root-container">
      <Form>
        <Field>
          <input />
        </Field>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
