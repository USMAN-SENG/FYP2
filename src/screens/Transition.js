import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Transition({
	spacingBetweenButtons,
	decreaseFormStep,
	formStep,
	increaseFormStep,
	ownerEmail,
}) {

	return (
		<div>
			<br />
			<br />
      <br />
			<br />
      <br />
			<Stack justifyContent="center" alignItems="center" spacing={3} p={3}>
				<Button variant="outlined" size="large">
					<Link to={`/AppointmentPage/${ownerEmail}`}>Go To The website</Link>
				</Button>
				<Button variant="outlined" size="large">
					<Link to={"/Dashboard/Calendar"}>Go To The dashboard</Link>
				</Button>
			</Stack>
		</div>
	);
}
