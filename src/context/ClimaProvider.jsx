import { useState, createContext } from "react";

const ClimaContext = createContext();

export const ClimaProvider = ({ children }) => {
   console.log(import.meta.env.VITE_API_KEY);

   const [busqueda, setBusqueda] = useState({
      ciudad: "",
      pais: "",
   });

   const datosBusqueda = (e) => {
      setBusqueda({
         // Copia de tu objeto
         ...busqueda,
         // Guarda el valor de name al value
         [e.target.name]: e.target.value,
      });
   };

   // Imprime en consola los datos agregados en el Formulario
   const consultarClima = (datos) => {
      console.log(datos);
   };

   return (
      <ClimaContext.Provider
         //
         value={{
            busqueda,
            datosBusqueda,
            consultarClima,
         }}
      >
         {children}
      </ClimaContext.Provider>
   );
};

export default ClimaContext;
