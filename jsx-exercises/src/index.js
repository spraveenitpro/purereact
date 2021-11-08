import React from "react";
import ReactDOM from "react-dom";
import Books from "./components/Books";
import AnotherBook from "./components/AnotherBook";

function MyThing() {
	return (
		<>
			<Books />
			<AnotherBook />
		</>
	);
}

ReactDOM.render(<MyThing />, document.querySelector("#root"));
