import { Route, Routes } from "react-router-dom";
import { Login, SignUp } from "./landing_page/signup";

import Home from "./landing_page/signup/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </div>
  );
}

export default App;
