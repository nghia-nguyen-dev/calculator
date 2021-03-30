import { add, multiply, negate } from "ramda";

const init = {
	value: "",
	temp: "",
	compute: "",
};

const subtract = (value, temp) => {
	if (!temp) return value;
	return temp - value;
};

const divide = (value, temp) => {
	if (!temp) return value;
	return temp / value;
};

const math = {
	"+": add,
	"−": subtract,
	"÷": divide,
	"×": multiply,
};

const reducer = (state = init, action) => {
	const { value, temp, compute } = state;
	switch (action.type) {
		case "CLICK_NUM":
			return {
				...state,
				value: value + action.value,
			};

		case "MATH":
			return {
				...state,
				compute: action.value,
				temp:
					math[compute]?.(value, temp) === undefined
						? value
						: math[compute](value, temp),
				value: "",
			};

		case "COMPUTE":
			return {
				...state,
				temp: value
					? math[compute](value, temp)
					: math[compute](temp, temp),
				value: "",
			};

		case "C":
			return {
				value: "",
				temp: "",
				compute: "",
			};

		case "±":
			return {
				...state,
				value: negate(value)
			}


		default:
			return state;
	}
};

export default reducer;
