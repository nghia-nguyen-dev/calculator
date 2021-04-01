import { add, multiply, negate, toString, isEmpty } from "ramda";
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
			if (action.value === "." && value.includes(".")) return state;
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
							? value
							: temp
						: math[compute](value, temp),
				value: "",
			};

		case "=":
			if (isEmpty(temp) || isEmpty(value)) return state;
			return {
				...state,
				temp: toString(
					value
						? math[compute](value, temp)
						: math[compute](temp, temp)
				),
				value: "",
				compute: "",
			};

		case "C":
			return {
				value: "",
				temp: "",
				compute: "",
			};

		case "±":
			if (!value && !temp) return state;

			return !value
				? { ...state, temp: toString(negate(temp)) }
				: { ...state, value: toString(negate(value)) };

		case "%":
			if (!value && !temp) return state;

			return !value
				? { ...state, temp: toString(temp / 100) }
				: { ...state, value: toString(value / 100) };

		default:
			return state;
	}
};

export default reducer;
