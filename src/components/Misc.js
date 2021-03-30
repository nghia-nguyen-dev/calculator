import { useDispatch } from "react-redux";

const Misc = ({ children }) => {
	const dispatch = useDispatch();

	const handleClick = () => dispatch({ type: children });

	return (
		<div
			className={`Misc pad ${children === "C" ? "clear" : null}`}
			onClick={handleClick}
		>
			{children}
		</div>
	);
};

export default Misc;
