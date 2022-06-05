import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import AboutScreen from "./screens/AboutScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import CustomizeAppoinment from "./screens/CustomizeAppoinment";
import MakeAppointment from "./screens/Customer/MakeAppointment";
import FaqScreen from "./screens/Customer/FaqScreen";

function App() {
	return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/AboutScreen" element = {<AboutScreen />} />
        <Route path="/CustomizeAppoinment" element={<CustomizeAppoinment />} />
        <Route path="/MakeAppointment" element={<MakeAppointment />} />
        <Route path="/FaqScreen" element={<FaqScreen />} />
      </Routes>
    </BrowserRouter>
	);
}

export default App;
