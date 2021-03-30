import { useDispatch } from "react-redux";

const Compute = ({ children }) => {
	const dispatch = useDispatch();
	return (
		<div className="Math pad" onClick={() => dispatch({ type: "COMPUTE" })}>
			{children}
		</div>
	);
};

export default Compute;