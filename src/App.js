import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout';
import Historico from './pages/Historico';
import NuevoRemito from './pages/NuevoRemito';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Historico />} />
            <Route path="nuevo" element={<NuevoRemito />} />
            <Route path="historico" element={<Historico />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
