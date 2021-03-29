import React from "react";
import Number from 'components/Number'

const Math = ({children}) => <div className="Math pad">{children}</div>
const Misc = ({children}) => <div className="Misc pad">{children}</div>

const Numpad = () => {
	return (
		<div className="Numpad" pho="lol">
			<Misc>C</Misc>
			<Misc>&#177;</Misc>
			<Math>%</Math>
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

			<Number className="pad--span">0</Number>
			<Number>.</Number>
			<Math>=</Math>
		</div>
	);
};

export default Numpad;
