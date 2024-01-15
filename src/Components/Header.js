import "./Header.css";
const Header = (props) => {
	const { date, setDate } = props;
	const changeHandler = (e) => {
		setDate(e.target.value);
	};
	console.log("date:", date);
	return (
		<header>
			<img src='https://api.nasa.gov/assets/img/favicons/favicon-192.png' />
			<input type='date' onChange={changeHandler} value={date}></input>
		</header>
	);
};

export default Header;
