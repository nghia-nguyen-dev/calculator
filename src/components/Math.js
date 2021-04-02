import { useDispatch } from "react-redux";
import { clickMath } from "store/actions";

const Math = ({ children }) => {
	const dispatch = useDispatch();

	const handleClick = () => dispatch(clickMath(children));

	return (
		<div className="Math pad" onClick={handleClick}>
			{children}
		</div>
	);
};

export default Math;
