import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import CargaProducto from "./CargaProducto";

function Formulario() {
  const [productos, setProductos] = useState([]);
  let remito = {};

  let indice = 0;

  const addProducto = async (prod, setFieldValue) => {
    productos.length > 0
      ? (indice = productos[productos.length - 1].id + 1)
      : (indice = 1);
    await setProductos((p) => [
      ...p,
      {
        id: indice,
        cantidad: prod.cantidad,
        descripcion: prod.descripcion,
        numeroSerie: prod.numeroSerie,
      },
    ]);
    resetProducto(setFieldValue);
  };

  const resetProducto = (setFieldValue) => {
    setFieldValue("cantidad", "0");
    setFieldValue("descripcion", "");
    setFieldValue("numeroSerie", "");
  };

  const removeProducto = (id) => {
    let aux = productos.filter((p) => p.id != id);
    setProductos(aux);
  };

  const initialValues = {
    origen: "0",
    sedeDestino: "0",
    tecnico: "0",
    traslado: "0",
    solicitante: "",
    cantidad: 0,
    descripcion: "",
    numeroSerie: "",
    prestamo: "",
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

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values.prestamo)
          remito = {
            encabesado: {
              origen: values.origen,
              destino: values.sedeDestino,
              tecnico: values.tecnico,
              traslado: values.traslado,
              solicitante: values.solicitante,
              prestamo: values.prestamo,
            },
            productos,
          };

          console.log(remito);
        }}
      >
        {({ values, handleChange, setFieldValue }) => {
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                    className="mt-2 p-2 block w-full bg-gray-50"
                  >
                    <option value="0">Seleccionar tecnico responsable</option>
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
                    onChange={handleChange}
                    className="mt-2 p-2 block w-full bg-gray-50"
                  >
                    <option value="0">Seleccionar persona de traslado</option>
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
                      type="radio"
                      value="no"
                    />
                    Si
                  </label>
                  <label className="text-gray-800 inline-block w-1/4">
                    <Field
                      className="form-radio m-4 p-2 w-5"
                      name="prestamo"
                      type="radio"
                      value="si"
                    />
                    No
                  </label>
                              {/* <label>
              <Field type="radio" name="prestamo" value="One" />
              One
            </label>
            <label>
              <Field type="radio" name="prestamo" value="Two" />
              Two
            </label> */}
                </div>
              </div>

              <CargaProducto
                values={values}
                productos={productos}
                handleChange={handleChange}
                addProducto={addProducto}
                removeProducto={removeProducto}
                setFieldValue={setFieldValue}
              />

              <button
                className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                type="submit"
              >
                Ingrsar productos
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Formulario;
