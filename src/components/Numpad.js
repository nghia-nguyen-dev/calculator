import React from "react";
import Number from "components/Number";
import Misc from "components/Misc";
import Math from "components/Math";

const Numpad = () => {
	return (
		<div className="Numpad">
			<Misc>C</Misc>
			<Misc>&#177;</Misc>
			<Misc>%</Misc>
			<Math>&#247;</Math>

			<Number>7</Number>
			<Number>8</Number>
			<Number>9</Number>
			<Math>&#215;</Math>

			<Number>4</Number>
			<Number>5</Number>
			<Number>6</Number>
			<Math>&#8722;</Math>

			<Number>1</Number>
			<Number>2</Number>
			<Number>3</Number>
			<Math>+</Math>

			<Number>0</Number>
			<Number>.</Number>
			<Misc>=</Misc>
		</div>
	);
};

export default Numpad;
