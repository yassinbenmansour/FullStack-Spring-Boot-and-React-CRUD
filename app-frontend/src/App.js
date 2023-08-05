import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar.tsx";
import Home from "./pages/Home.tsx";
import { BrowserRouter as Router, Routes , Route  } from 'react-router-dom';
import AddUser from './users/AddUser.tsx';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
        <Routes>
           <Route exact  path="/" element={<Home />}/>
           <Route exact  path="/adduser" element={<AddUser />}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
