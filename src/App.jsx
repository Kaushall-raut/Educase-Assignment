import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Sign from "./pages/Sign";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="/login" element={<Sign />} />

        <Route path="/register" element={<SignUp />} />

        <Route path="/account" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
