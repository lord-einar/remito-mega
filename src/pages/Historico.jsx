import React, { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  useFormik,
} from "formik";

function Historico() {
  const [prod, setProd] = useState([]);

  const addProd = (producto) => {
    setProd(p => [...p, producto]);
  };

  console.log(prod);

  return (
    <>
      <Formik
        initialValues={{
            name: '',
            email: ''
        }}
        onSubmit={(values) => {
        //   console.log(values);
        }}
      >
        {(data) => {
            // console.log(data.values);
          return (
            <Form>
              <Field name="name" id="name" type="text" />
              <Field name="email" id="email" type="text" />
              <button
                type="button"
                onClick={() =>
                  addProd({
                    name: data.values.name,
                    email: data.values.email,
                  })
                }
              >
                Enviar
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default Historico;
