import { Route, Routes } from "react-router-dom";
import Login from "./recursos/login";
import Registro from "./recursos/login/Registro";
import AddPro from "./recursos/produto/AddPro";
import EditPro from "./recursos/produto/EditPro";
import ProList from "./recursos/produto/proList";

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/regis" element={<Registro />} />
        <Route path="/add-pro" element={<AddPro />} />
        <Route path="/" element={<ProList />} />
        <Route path="/edit-pro/:id" element={<EditPro />} />
      </Routes>
    
  );
}

export default App;
