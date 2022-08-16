import { useState, createContext } from "react";
import axios from "axios";
const ClimaContext = createContext();

export const ClimaProvider = ({ children }) => {
   // console.log(import.meta.env.VITE_API_KEY);

   const [busqueda, setBusqueda] = useState({
      ciudad: "",
      pais: "",
   });

   // Espera recibir un objeto por respuesta
   const [resultado, setResultado] = useState({});

   const datosBusqueda = (e) => {
      setBusqueda({
         // Copia de tu objeto
         ...busqueda,
         // Guarda el valor de name al value
         [e.target.name]: e.target.value,
      });
   };

   // Imprime en consola los datos agregados en el Formulario
   // IMPORTANT
   const consultarClima = async (datos) => {
      try {
         //extraer ciudad o pais
         const { ciudad, pais } = datos;

         //Esta es nuestra llave de la API
         const appId = import.meta.env.VITE_API_KEY;

         //==> Si funciona let clima = navigator.geolocation;
         // console.log(clima);

         // LLamamos la API -->>
         const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;

         // LLAMAMOS AXIOS
         const { data } = await axios(url);
         // console.log(data[0]);
         const { lat, lon } = data[0];

         const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

         const { data: clima } = await axios(urlClima);
         // ENVIA RESPUESTA POR OBJETO
         console.log(clima);
         setResultado(clima);

         // console.log(url);
      } catch (error) {
         console.log(datos);
      }
   };

   return (
      <ClimaContext.Provider
         //
         value={{
            busqueda,
            datosBusqueda,
            consultarClima,
            resultado,
         }}
      >
         {children}
      </ClimaContext.Provider>
   );
};

export default ClimaContext;
