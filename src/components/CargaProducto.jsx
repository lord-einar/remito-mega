import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function CargaProducto({ values, productos, addProducto, removeProducto, setFieldValue }) {


  return (
    <>
      <div className="m-5 px-5 py-5 border-solid border-2 flex flex-row border-sky-500">
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
                cantidad: values.cantidad,
                descripcion: values.descripcion,
                numeroSerie: values.numeroSerie,
              }, setFieldValue);
            }}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>

      {/* TABLE DE PRODUCTOS */}

      <table className="m-10 table-fixed w-10/12">
        <thead>
          <tr>
            <th className="w-1/12 px-4 py-2">Cantidad</th>
            <th className="w-7/12 px-4 py-2">Descripción</th>
            <th className="w-3/12 px-4 py-2">Número de serie</th>
            <th className="w-3/12 px-4 py-2">Acción</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p, idx) => {
              console.log(p);
            return (
              <tr key={idx}>
                <td className="border w-1/12 px-4 py-2">{p.cantidad}</td>
                <td className="border w-7/12 px-4 py-2">{p.descripcion}</td>
                <td className="border w-3/12 px-4 py-2">{p.numeroSerie}</td>
                <td className="border w-3/12 px-4 py-2">
                  <button
                    className="bg-red-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mx-6 border border-blue-700 rounded"
                    name="eliminar"
                    type="button"
                    key={p.id}
                    onClick={() => removeProducto(p.id)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
    </>
  );
}

export default CargaProducto;
