import React from "react";
import { Field, ErrorMessage } from "formik";

function CargaProducto({ data, addProducto, initialValues, handleReset }) {
  return (
    <>
      <div className="px-5 py-5 border-solid border-2 flex flex-row border-sky-500">
        <div className="mx-4 basis-1/12">
          <label className="text-gray-800" htmlFor="cantidad">
            Cantidad
          </label>
          <Field
            id="cantidad"
            name="cantidad"
            type="number"
            className="mt-2 p-3 block w-3/4 bg-gray-50"
          />
        </div>
        <div className="mx-4 basis-7/12">
          <label className="text-gray-800" htmlFor="descripcion">
            Descripcion
          </label>
          <Field
            id="descripcion"
            name="descripcion"
            values={initialValues.descripcion}
            className="mt-2 p-3 block w-full m-auto bg-gray-50"
          />
        </div>
        <div className="mx-4 basis-3/12">
          <label className="text-gray-800" htmlFor="numeroSerie">
            Número de serie
          </label>
          <Field
            id="numeroSerie"
            name="numeroSerie"
            className="mt-2 p-3 block w-full bg-gray-50"
          />
        </div>
        <div className="mx-4 mt-8 basis-1/12">
          <button
            type="button"
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={() => {
              addProducto({
                cantidad: data.values.cantidad,
                descripcion: data.values.descripcion,
                numeroSerie: data.values.numeroSerie
              });
              data.handleReset()              
            }}
          >
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default CargaProducto;
