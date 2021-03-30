import React from "react";
import { useSelector } from "react-redux";

const Screen = () => {
	const value = useSelector(state => state.value);
	const temp = useSelector(state => state.temp);
	const compute = useSelector(state => state.compute);

	return (
		<div className="Screen">{value ? value : temp === "" ? "0" : temp}</div>
	);
};

export default Screen;
