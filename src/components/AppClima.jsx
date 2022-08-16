import { useClima } from "../hooks/useClima";
import { Formulario } from "./Formulario";
import { Resultado } from "./Resultado";

export const AppClima = () => {
   const { resultado } = useClima();

   return (
      <>
         <main className="dos-columnas">
            <Formulario />

            {/** Antes de mostrar resultado
             * se declara la variable para que muestre el
             * resultado y no afecte a la hora de produccion
             */}
            {resultado?.name && <Resultado />}
         </main>
      </>
   );
};
