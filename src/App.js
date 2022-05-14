import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import CustomizeAppoinment from "./screens/CustomizeAppoinment";


function App() {
	return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/CustomizeAppoinment" element={<CustomizeAppoinment />} />
      </Routes>
    </BrowserRouter>
	);
}

export default App;
