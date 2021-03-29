const init = {
	value: "",
};

const reducer = (state = init, action) => {
	switch (action.type) {
		case "CLICK_NUM":
			return {
				...state,
				value: state.value + action.value,
			};

		default:
			return state;
	}
};

export default reducer;
