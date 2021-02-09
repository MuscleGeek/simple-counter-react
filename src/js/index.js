//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

const Counter = properties => {
	let numbArr = properties.number.split("");
	const howManyZeros = 5 - numbArr.length;

	for (let i = 0; i < howManyZeros.length; i++) {
		numbArr.splice(0, 0, "0");
	}

	return (
		<h1 className="d-flex counterStyle justify-content-center">
			<div className="styleClock" style={{ background: "black" }}>
				<i className="far fa-clock" />
			</div>
			{numbArr.map((num, i) => (
				<div key={i}>{num}</div>
			))}
		</h1>
	);
};

/*Render reacts application*/
let number = 0;

setInterval(() => {
	number = number + 1;
	ReactDOM.render(
		<Counter number={number.toString()} />,
		document.querySelector("#app")
	);
}, 1000);
