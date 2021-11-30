import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesDashboard from "./RoutesDashboard";
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