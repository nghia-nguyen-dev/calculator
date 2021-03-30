import React from "react";
import Number from "components/Number";
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
const Math = ({ children }) => {
	const dispatch = useDispatch();

	const handleClick = () => dispatch({ type: "MATH", value: children });

	return (
		<div className="Math pad" onClick={handleClick}>
			{children}
		</div>
	);
};

const Compute = ({ children }) => {
	const dispatch = useDispatch();
	return (
		<div className="Math pad" onClick={() => dispatch({ type: "COMPUTE" })}>
			{children}
		</div>
	);
};

const Numpad = () => {
	return (
		<div className="Numpad">
			<Misc>C</Misc>
			<Misc>&#177;</Misc>
			<Misc>%</Misc>
			<Math>&#247;</Math>

			<Number>7</Number>
			<Number>8</Number>
			<Number>9</Number>
			<Math>&#215;</Math>

			<Number>4</Number>
			<Number>5</Number>
			<Number>6</Number>
			<Math>&#8722;</Math>

			<Number>1</Number>
			<Number>2</Number>
			<Number>3</Number>
			<Math>+</Math>

			<Number className="pad--span">0</Number>
			<Number>.</Number>
			<Compute>=</Compute>
		</div>
	);
};

export default Numpad;
