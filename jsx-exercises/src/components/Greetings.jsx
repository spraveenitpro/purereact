import React from "react";
import { ReactDOM } from "react";

function Greetings() {
	let username = null;

	return <span>{username ? "Hello, " + username : "Not logged in"}</span>;
}

export default Greetings;
