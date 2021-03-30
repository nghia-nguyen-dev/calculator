import { useDispatch } from "react-redux";

const Math = ({ children }) => {
	const dispatch = useDispatch();

	const handleClick = () => dispatch({ type: "MATH", value: children });

	return (
		<div className="Math pad" onClick={handleClick}>
			{children}
		</div>
	);
};

export default Math;
