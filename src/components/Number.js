import React from "react";
import { useDispatch } from "react-redux";



const Number = ({ children, className }) => {
	const dispatch = useDispatch();
	const handleClick = () =>
		dispatch({
			type: "CLICK_NUM",
			value: children,
		});

	return (
		<div className={`Number pad ${className}`} onClick={handleClick}>
			{children}
		</div>
	);
};

export default Number;
