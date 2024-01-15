import "./img.css";
const Image = (props) => {
	const { url } = props;
	return (
		<div className='img-container'>
			<img src={url}></img>
		</div>
	);
};

export default Image;
