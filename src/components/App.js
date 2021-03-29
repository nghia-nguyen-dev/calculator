import React from "react";
import Calculator from "./Calculator";
import Screen from "components/Screen";

const App = () => {
	console.log(`I rendered`);
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
