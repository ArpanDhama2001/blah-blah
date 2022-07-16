import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Chatspage from "./Pages/Chatspage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chats" element={<Chatspage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
