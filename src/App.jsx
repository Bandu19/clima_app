import "./App.css";
import { AppClima } from "./components";
import { ClimaProvider } from "./context";

function App() {
   return (
      <ClimaProvider>
         <header>
            <h1>Practica Clima</h1>
         </header>
         <AppClima />
      </ClimaProvider>
   );
}

export default App;
