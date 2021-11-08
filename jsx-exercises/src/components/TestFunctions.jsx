import React from "react";
import { ReactDOM } from "react";

function TestFunctions() {
	//return <span>Test Component!</span>;
	var x = 6;
	return (
		<>
			<span>One</span>
			<span>Two</span>
			<span>
				{x && 5} {x && 7}
			</span>
			<span>{alert("hello")}</span>
			<span>"Quoted string"</span>
			<span>{"Quoted string inside braces"}</span>
			<span>{"single quotes"}</span>
		</>
	);
}

export default TestFunctions;
