import React from "react";
import ReactDOM from "react-dom";

function Hello() {
	return <div>Hello</div>;

	//return React.createElement("div", {}, "Hello World!");
}

function World() {
	return <div>World!!!</div>;
}

function HelloWorld() {
	return (
		<div>
			<Hello />
			<World />
		</div>
	);
}

ReactDOM.render(<HelloWorld />, document.querySelector("#root"));
