import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import WorkHours from "./screens/WorkHours";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path = "/signup" element = {<SignUpScreen />} />
        <Route path="/login" element = {<LoginScreen />} />
        <Route path="/WorkHours" element = {<WorkHours />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
