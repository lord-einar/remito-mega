// import { useFormik } from 'Formik'
import { Formik, Form, Field } from "formik";

function Historico() {
  const initialValues = {
    prueba: "",
    email: "",
    cita: ""
  };

  const reset = (setFieldValue) => {
    setFieldValue("prueba", "");
    setFieldValue("email", "");
    setFieldValue("cita", "0");

  };

  return (
    <>
      <Formik initialValues={initialValues}>
        {({ values, setFieldValue, handleChange }) => {
          console.log(values)
          return (
            <Form>
              <Field
                id="prueba"
                name="prueba"
                className="mt-2 p-2 block w-full bg-gray-50"
              />
              <Field
                id="email"
                name="email"
                className="mt-2 p-2 block w-full bg-gray-50"
              />
              <Field
                id="cita"
                name="cita"
                as={"select"}
                onChange={handleChange}
                className="mt-2 p-2 block w-full bg-gray-50"
              >
                <option value='0'>Seleccionar ciudad</option>
                <option value='ro'>Roma</option>
                <option value='mi'>Milan</option>
                <option value='na'>Napoles</option>
                <option value='na'>Napoles</option>

              </Field>
              <button
                type="button"
                onClick={(e) => reset(setFieldValue)}
              >
                Agregar
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default Historico;
