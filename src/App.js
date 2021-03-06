import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import CustomizeAppoinment from "./screens/CustomizeAppoinment";
import AppointmentPage from "./appointmentWebsite/AppointmentPage";
import FAQpage from "./appointmentWebsite/FAQpage" ;
import AppoAboutPage from "./appointmentWebsite/AppoAboutPage";

function App() {
	return (
		<BrowserRouter>
				<Routes>
					<Route index element={<Homepage />} />
					<Route path="/signup" element={<SignUpScreen />} />
					<Route path="/login" element={<LoginScreen />} />
					<Route
						path="/CustomizeAppoinment"
						element={<CustomizeAppoinment />}
					/>
					<Route path="/AppointmentPage" element={<AppointmentPage />} />
					<Route path="/FAQpage" element={<FAQpage />} />
					<Route path="/AppointmentAboutPage" element={<AppoAboutPage />} />
				</Routes>
			</BrowserRouter>
	);
}

export default App;
