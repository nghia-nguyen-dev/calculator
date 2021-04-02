import React from "react";
import { useDispatch } from "react-redux";
import {clickNum} from 'store/actions'

const Number = ({ children, className }) => {
	const dispatch = useDispatch();
	const handleClick = () =>
		dispatch(clickNum(children));

	return (
		<div className={`Number pad ${className}`} onClick={handleClick}>
			{children}
		</div>
	);
};

export default Number;
