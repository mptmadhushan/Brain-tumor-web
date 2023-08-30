import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./routes/login";
import NewPatient from "./routes/newpateint";
import Dashboard from "./routes/dashboard";
import Preprocessing from "./routes/preprocessing";
import Detection from "./routes/Detection";
import Classification from "./routes/Classification";

function App() {
  return (
    <div className="App">

        <BrowserRouter>
          <Routes>
              <Route index path="/" element={<Login/>}/>
              <Route path="NewPatient" element={<NewPatient/>}/>
              <Route path="Preprocessing" element={<Preprocessing/>}/>
              <Route path="Detection" element={<Detection/>}/>
              <Route path="Classification" element={<Classification/>}/> 
              <Route path="Dashboard" element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
