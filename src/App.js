import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesDashboard from "./RoutesDashboard";

import moduleName from 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RoutesDashboard />
      </div>
    </BrowserRouter>
  );
}
export default App;