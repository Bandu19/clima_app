import { useState, createContext } from "react";

const ClimaContext = createContext();

export const ClimaProvider = ({ children }) => {
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

   return (
      <ClimaContext.Provider
         //
         value={{
            busqueda,
            datosBusqueda,
         }}
      >
         {children}
      </ClimaContext.Provider>
   );
};

export default ClimaContext;
