import React from "react";
import Calculator from "./Calculator";
import Screen from "components/Screen";
import Numpad from "components/Numpad";

const App = () => {
	return (
		<div className="App">
			<Calculator>
				<Screen />
				<Numpad />
			</Calculator>
		</div>
	);
};

export default App;
