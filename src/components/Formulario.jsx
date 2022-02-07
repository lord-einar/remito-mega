import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";

import * as Yup from "yup";
import CargaProducto from "./CargaProducto";

function Formulario() {
  const [productos, setProductos] = useState([]);

  const addProducto = (prod) => {
    setProductos((p) => [...p, prod]);
    // setFieldValue("descripcion", "");
  };

  const initialValues = {
    cantidad: 0,
    descripcion: "",
    numeroSerie: "",
  };

  const sedes = [
    {
      id: 1,
      name: "Central",
    },
    {
      id: 2,
      name: "Adrogue",
    },
    {
      id: 3,
      name: "Alcorta",
    },
  ];
  const tecnicos = [
    {
      id: 1,
      name: "Edgar Alfaro",
    },
    {
      id: 2,
      name: "Mariano Campilongo",
    },
    {
      id: 3,
      name: "Matias Iocco",
    },
  ];
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-11/12 mx-auto">
      <h2 className="text-2xl">Completar los campos</h2>

      <Formik enableReinitialize={true} initialValues={initialValues}>
        {(data, handleReset) => {
        //   console.log(productos);
          return (
            <Form name="cargaProductos">
              <div className="px-5 py-8 flex flex-row">
                <div className="mx-4 basis-1/2">
                  <label className="text-gray-800 py-2" htmlFor="origen">
                    Origen
                  </label>
                  <Field
                    id="origen"
                    name="origen"
                    as="select"
                    className="mt-2 p-2 block w-full bg-gray-50"
                  >
                    <option value="0">Seleccionar origen</option>
                    {sedes.map((sede) => {
                      return (
                        <option key={sede.id} value={sede.id}>
                          {sede.name}
                        </option>
                      );
                    })}
                  </Field>
                </div>
                <div className="mb-3 basis-1/2">
                  <label className="text-gray-800" htmlFor="sedeDestino">
                    Destino
                  </label>
                  <Field
                    id="sedeDestino"
                    name="sedeDestino"
                    as="select"
                    className="mt-2 p-2 block w-full bg-gray-50"
                  >
                    <option value="0">Seleccionar destino</option>

                    {sedes.map((sede) => {
                      return (
                        <option key={sede.id} value={sede.id}>
                          {sede.name}
                        </option>
                      );
                    })}
                  </Field>
                </div>
              </div>
              <div className="px-5 pb-8 flex flex-row">
                <div className="mx-4 basis-1/2">
                  <label className="text-gray-800" htmlFor="tecnico">
                    Técnico encargado
                  </label>
                  <Field
                    id="tecnico"
                    name="tecnico"
                    as="select"
                    className="mt-2 p-2 block w-full bg-gray-50"
                  >
                    {tecnicos.map((tecnico) => {
                      return (
                        <option key={tecnico.id} value={tecnico.id}>
                          {tecnico.name}
                        </option>
                      );
                    })}
                  </Field>
                </div>
                <div className="mx-4 basis-1/2">
                  <label className="text-gray-800" htmlFor="traslado">
                    Responsable de traslado
                  </label>
                  <Field
                    id="traslado"
                    name="traslado"
                    as="select"
                    className="mt-2 p-2 block w-full bg-gray-50"
                  >
                    {tecnicos.map((tecnico) => {
                      return (
                        <option key={tecnico.id} value={tecnico.id}>
                          {tecnico.name}
                        </option>
                      );
                    })}
                  </Field>
                </div>
              </div>
              <div className="px-5 py-5 flex flex-row">
                <div className="mx-4 basis-1/2">
                  <label className="text-gray-800" htmlFor="solicitante">
                    Solicitante
                  </label>
                  <Field
                    id="solicitante"
                    name="solicitante"
                    className="mt-2 p-2 block w-full bg-gray-50"
                  />
                </div>
                <div className="mx-4 basis-1/2">
                  <label className="text-gray-800 block" htmlFor="lblPrestamo">
                    Prestamo:
                  </label>
                  <label className="text-gray-800 inline-block w-1/4">
                    <Field
                      className="form-radio m-4 p-2 w-5"
                      name="prestamo"
                      type="Radio"
                      value="si"
                    />
                    Si
                  </label>
                  <label className="text-gray-800 inline-block w-1/4">
                    <Field
                      className="form-radio m-4 p-2 w-5"
                      name="prestamo"
                      type="Radio"
                      value="no"
                      defaultChecked
                    />
                    No
                  </label>
                </div>
              </div>

              <CargaProducto
                data={data}
                addProducto={addProducto}
                initialValues={initialValues}
                handleReset={handleReset}
              />

              {/* TABLE DE PRODUCTOS */}

              <table class="m-10 table-fixed w-10/12">
                <thead>
                  <tr>
                    <th class="w-1/12 px-4 py-2">Cantidad</th>
                    <th class="w-7/12 px-4 py-2">Descripción</th>
                    <th class="w-3/12 px-4 py-2">Número de serie</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((p) => {
                    return (
                      <tr>
                        <td class="border w-1/12 px-4 py-2">{p.cantidad}</td>
                        <td class="border w-7/12 px-4 py-2">{p.descripcion}</td>
                        <td class="border w-3/12 px-4 py-2">{p.numeroSerie}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Formulario;
