import React from "react";
import { useSelector } from "react-redux";

const Screen = () => {
	const value = useSelector(state => state.value);
	const temp = useSelector(state => state.temp)

	return <div className="Screen">{value}</div>;
};

export default Screen;
