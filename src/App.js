import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Api from "./components/Api.js";
import Next from "./components/Next.js"


//import SideBarDashboard from './components/Side';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Api/>}/>
        <Route path='/next/:id' element={<Next/>}/>

        
        
      </Routes>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
