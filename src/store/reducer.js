import { add, multiply, divide } from "ramda";

const init = {
	value: "",
	temp: "",
	compute: "",
};
const subtract = (value, temp) => {
	if (!temp) return value;
	return temp - value;
};

const math = {
	"+": add,
	"−": subtract,
	"÷": "divide",
	"×": multiply,
	"=": "equals",
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
				temp: math[compute](value, temp),
				value: "",
			};

		case "C":
			return {
				value: "",
				temp: "",
				compute: "",
			};

		default:
			return state;
	}
};

export default reducer;
