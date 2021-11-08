import React from "react";
import ReactDOM from "react-dom";
import Books from "./components/Books";
import AnotherBook from "./components/AnotherBook";
import Greetings from "./components/Greetings";
import TestFunctions from "./components/TestFunctions";
import MyTable from "./components/MyTable";

function MyThing() {
	return (
		<>
			<Books />
			<AnotherBook />
			<Greetings />
			<TestFunctions />
			<MyTable />
		</>
	);
}

ReactDOM.render(<MyThing />, document.querySelector("#root"));
