import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import fakeData from "./FakeData";
import axios from "axios";
function App() {
	const dateNow = new Date();
	const [data, setData] = useState(fakeData);
	const [date, setDate] = useState(dateNow.toISOString().slice(0, 10));
	useEffect(() => {
		setData(null);
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
			.then((res) => setData(res.data));
	}, [date]);
	return (
		<div className='App'>
			<Header date={date} setDate={setDate}></Header>
			{data ? <Main data={data}></Main> : <p>Loading...</p>}
			<Footer></Footer>
		</div>
	);
}

export default App;
