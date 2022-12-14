import { useState } from "react";
import { useClima } from "../hooks/useClima";

export const Formulario = () => {
   // Alerta
   const [alerta, setAlerta] = useState("");
   //
   const { busqueda, datosBusqueda, consultarClima } = useClima();

   const { ciudad, pais } = busqueda;

   const handleSubmit = (e) => {
      e.preventDefault();

      // Si algun valor esta vacio
      if (Object.values(busqueda).includes("")) {
         setAlerta("Todos los campos son obligatorios");
         return;
      }

      // Manda los datos al consultarClima de lo que tenemos dentro de nuestra State

      consultarClima(busqueda);
   };

   return (
      <div className="contenedor">
         {
            // Ocupando Alerta
            alerta && <p>{alerta}</p>
         }

         <form onSubmit={handleSubmit}>
            <div className="campo">
               <label htmlFor="ciudad">Ciudad</label>
               <input
                  type="text"
                  id="ciudad"
                  name="ciudad"
                  onChange={datosBusqueda}
                  value={ciudad}
               />
            </div>
            <div className="campo">
               <label htmlFor="pais">Pais</label>

               <select
                  //
                  name="pais"
                  //
                  id="pais"
                  onChange={datosBusqueda}
                  value={pais}
               >
                  <option value="">Seleccione un país</option>
                  <option value="US">Estados Unidos</option>
                  <option value="MX">México</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">España</option>
                  <option value="PE">Perú</option>
               </select>
            </div>

            <input type="submit" value="Consultar Clima" />
         </form>
      </div>
   );
};
