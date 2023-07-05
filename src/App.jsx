import React, { useEffect, useState } from "react";
import SwiperImg from "./Components/SwiperImg/SwiperImg";
import BtnSlid from "./Components/btnSlid/BtnSlid";

import "./App.css";
const App = () => {
	const [data, dataState] = useState();
	const [btn, setBtn] = useState(true);
	let data100 = [];

	useEffect(() => {
		const Api = async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/photos"
			);
			const responseJson = await response.json();
			dataState(responseJson);
		};

		Api();
	}, []);

	if (data === undefined) return;
	else
		data.map(el => {
			if (el.id <= 50) data100.push(el);
		});

	const handleClick = () => setBtn(false);

	if (btn === true) return <BtnSlid handleClick={handleClick} />;

	if (btn === false) {
		if (data === undefined) return;
		else return <SwiperImg data={data100} />;
	}
};

export default App;
