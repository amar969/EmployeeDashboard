import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Employees from "./Components/Employees";
import Employee from "./Components/Employee";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/create" element={<Create />} />
        <Route path="/employees/:id" element={<Employee />} />
        <Route path="/employees/:id/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
