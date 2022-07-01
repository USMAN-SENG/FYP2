import React from "react";
import { SmallFooter } from "../components/Footer";
import Header from "../components/Header";

export default function AboutScreen() {
	return (
		<div>
			<div>
				<Header />
				<div
					className="flex flex-1 backdrop-blur-md my-10 py-10"
					style={{ margin: "50px", padding: "5px" }}
				>
					<iframe
						width="500"
						height="500"
						src="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=400"
					></iframe>

					<div className="flex flex-1 justify-top h-[40rem] flex-col p-10 text-3xl text-gray-600">
						About
						<br />
						<br />
						Who We Are
						<p style={{ "font-size": "15px" }}>
							In IIUM University and other universities, students usually need
							to go to the office physically to ask and solve their problems, it
							is usually based on first come, first served. Because of that,
							some offices can get crowded very quickly since anyone can show up
							at any time and wait for their turn. Since the pandemic began,
							some offices require the student to make an appointment first
							before coming to the office. Since there is no platform for
							students to use for asking questions or making appointments, we
							decided that there should be a platform which provides answers to
							all the queries of students and book an appointment with the
							department if needed.
						</p>
					</div>
				</div>
			</div>
			<SmallFooter />
		</div>
	);
}
