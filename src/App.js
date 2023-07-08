import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components';
import { About, Calculator, History } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            index
            element={<Calculator />}
          />
          <Route
            path="about"
            element={<About />}
          />
          <Route
            path="history"
            element={<History />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
