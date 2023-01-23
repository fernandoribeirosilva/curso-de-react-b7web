import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { AboutFernando } from './pages/AboutFernando';
import { AboutPedro } from "./pages/AboutPedro";
import { Home } from "./pages/Home";


export function App() {
  return (
    <div className="p-4">
      <header>
        <h1>Titulo do site</h1>
      </header>
      <hr />
      <div className="py-4">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/sobre/fernando" element={<AboutFernando />} />
          <Route path="/sobre/pedro" element={<AboutPedro />} />
        </Routes>

      </div>
      <hr />
      <footer>
        Todos os direitos reservados.
      </footer>
    </div>
  )
}
