import { add, multiply, negate } from "ramda";
import { subtract, divide } from "utils/helpers";

const init = {
	value: "",
	temp: "",
	compute: "",
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
			console.log(math[compute]?.(value, temp))

			return {
				...state,
				compute: action.value,
				temp:
					math[compute]?.(value, temp) === undefined
						? value ? value : temp
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
				compute: ""
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
				value: negate(value),
			};

		case "%":
			return {
				...state,
				value: value / 100,
			};

		default:
			return state;
	}
};

export default reducer;
