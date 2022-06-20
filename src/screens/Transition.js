import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { ButtonStep } from "./formComponents/ButtonStep";

export default function Transition({
	spacingBetweenButtons,
	decreaseFormStep,
	formStep,
	increaseFormStep,
	ownerEmail,
}) {

	let disablePreviousButton = false;
	let disableNextButton = false;

	return (
		<div>
			<br />
			<br />
      <br />
			<br />
      <br />
			<Stack justifyContent="center" alignItems="center" spacing={3} p={3}>
				<Button variant="outlined" size="large">
					<Link to={"/AppointmentPage"}>Go To The website</Link>
				</Button>
				<Button variant="outlined" size="large">
					<Link to={"/Dashboard/Calendar"}>Go To The dashboard</Link>
				</Button>
			</Stack>
      <ButtonStep
				spacingBetweenButtons={spacingBetweenButtons}
				decreaseFormStep={decreaseFormStep}
				formStep={formStep}
				increaseFormStep={increaseFormStep}
				disablePreviousButton={disablePreviousButton}
				disableNextButton={disableNextButton}
				submitButton={"submit"}
			/>
		</div>
	);
}
