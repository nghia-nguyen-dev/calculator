import { useDispatch } from "react-redux";
import { clickMisc } from "store/actions";

const Misc = ({ children }) => {
	const dispatch = useDispatch();

	const handleClick = () => dispatch(clickMisc(children));

	return (
		<div
			className={`Misc pad ${children === "C" ? "clear" : ""} ${
				children === "=" ? "Math" : ""
			}`}
			onClick={handleClick}
		>
			{children}
		</div>
	);
};

export default Misc;
