import React from "react";
import Calculator from "./Calculator";
import Screen from "components/Screen";
import Numpad from "components/Numpad";



const App = () => {
	return (
		<div className="App">
			<div className="circle circle--lg"></div>
			<div className="circle circle--md"></div>
			<div className="circle circle--sm"></div>
			<Calculator>
				<Screen />
				<Numpad />
			</Calculator>
		</div>
	);
};

export default App;




