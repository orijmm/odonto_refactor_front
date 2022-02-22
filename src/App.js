import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesDashboard from "./RoutesDashboard";

import 'bootstrap/dist/css/bootstrap.min.css'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
    <BrowserRouter>
      <div className="App">
        <RoutesDashboard />
      </div>
    </BrowserRouter>
    <ToastContainer />
    </>
  );
}
export default App;