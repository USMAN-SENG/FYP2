import React from "react";
import DashHeader from "./dashComponents/DashHeader";
import { Scheduler } from "@arshadrao/react-scheduler";
import Grid from "@mui/material/Grid";

// ctrl + alt + r
export default function Calendar() {
	return (
		<div>
			<DashHeader />
			<Grid
				container
				p={5}
				justifyContent="center"
				alignItems="center"
				alignContent="center"
			>
				<Grid item md={12}>
					<Scheduler
						month={{
							weekDays: [0, 1, 2, 3, 4, 5, 6],
							weekStartOn: 6,
							startHour: 8,
							endHour: 19,
						}}
						week={{
							weekDays: [0, 1, 2, 3, 4, 5, 6],
							weekStartOn: 6,
							startHour: 1,
							endHour: 24,
							step: 60,
						}}
						day={{
							startHour: 1,
							endHour: 24,
							step: 60,
						}}
						view="month"
						events={[
							{
								event_id: 'hghhfhf',
								title: "i want to renew my visa , i had problems for months ",
								start: new Date(`2022-6-17 16:30`),
								end: new Date(`2022-6-17 17:30`),
							},
							{
								event_id: 2,
								title: "Event 2",
								start: new Date("2022/6/11 16:30"),
								end: new Date("2022/6/11 17:30"),
							},
						]}
					/>
				</Grid>
			</Grid>
		</div>
	);
}
