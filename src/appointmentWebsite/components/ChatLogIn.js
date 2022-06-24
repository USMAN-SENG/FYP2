import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export function ChatLogIn({
	emailValue,
	handleEmailChange,
	passwordValue,
	handlePasswordChange,
	handleSubmit,
	loading,
	buttonLabel,
}) {
	return (
		<Stack justifyContent="center" alignItems="center" spacing={3}>
			<TextField
				label="Email"
				variant="outlined"
				fullWidth
				multiline
				minRows={1}
				
				value={emailValue}
				onChange={(e) => handleEmailChange(e.target.value)}
			/>
			<TextField
				label="Password"
				variant="outlined"
				fullWidth
				multiline
				minRows={1}
				
				value={passwordValue}
				onChange={(e) => handlePasswordChange(e.target.value)}
			/>
			<Button variant="outlined" onClick={handleSubmit} disabled={loading}>
				{buttonLabel}
			</Button>
		</Stack>
	);
}
