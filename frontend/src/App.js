import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
