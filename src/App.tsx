import "./App.css";
import Apps from "./Pages/Apps.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.tsx";
import DashBoard from "./Pages/DashBoard.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/apps" element={<Apps />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
