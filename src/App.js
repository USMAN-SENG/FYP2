import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./screens/Homepage";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import CustomizeAppoinment from "./screens/CustomizeAppoinment";
import AboutScreen from "./screens/AboutScreen";

import AppointmentPage from "./appointmentWebsite/AppointmentPage";
import FAQpage from "./appointmentWebsite/FAQpage";
import AppoAboutPage from "./appointmentWebsite/AppoAboutPage";
import CustomerServicePage from "./appointmentWebsite/CustomerServicePage";

import Calendar from "./dashboard/Calendar";
import EditFAQ from "./dashboard/EditFAQ";
import Msg from "./dashboard/Msg";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Homepage />} />
				<Route path="/signup" element={<SignUpScreen />} />
				<Route path="/login" element={<LoginScreen />} />
				<Route path="/AboutScreen" element = {<AboutScreen />} />
				<Route path="/CustomizeAppoinment" element={<CustomizeAppoinment />} />

				<Route path="/AppointmentPage/:ownerEmail" element={<AppointmentPage />} />
				<Route path="/FAQpage/:ownerEmail" element={<FAQpage />} />
				<Route path="/AppointmentAboutPage/:ownerEmail" element={<AppoAboutPage />} />
				<Route path="/CustomerServicePage/:ownerEmail" element={<CustomerServicePage />} />

				<Route path="/Dashboard/Calendar" element={<Calendar />} />
				<Route path="/Dashboard/EditFAQ" element={<EditFAQ />} />
				<Route path="/Dashboard/Msg" element={<Msg />} />

			</Routes>
		</BrowserRouter>
	);
}

export default App;
