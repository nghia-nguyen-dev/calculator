const init = {
	value: "",
	temp: "",
	mathOp: null,
};

const add = (value, temp) => `${parseInt(temp) + parseInt(value)}`;
const minus = (value, temp) => `${parseInt(value) - parseInt(temp)}`;

const math = {
	"+": add,
	"−": minus,
	"÷": "divide",
	"×": "multiply",
	"=": 'equals',
};

const reducer = (state = init, action) => {

	switch (action.type) {
		case "CLICK_NUM":
			return {
				...state,
				value: state.value + action.value,
			}

		case "MATH":

			return {
				...state,
				mathOp: math[action.value],
				temp: state.value,
				value: "",
			}

		case "COMPUTE":
			return {
				...state,
				value: state.mathOp(state.temp, state.value)
			}
			

		default:
			return state;
	}
};

export default reducer;

