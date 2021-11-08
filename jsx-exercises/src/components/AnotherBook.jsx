import React from "react";
import ReactDOM from "react-dom";

function AnotherBook() {
	return [
		React.createElement("div", null, "The Title"),
		React.createElement("div", null, "The Author"),
		React.createElement(
			"ul",
			{ className: "stats" },
			React.createElement("li", { className: "ratings" }, "5 stars"),
			React.createElement("li", { className: "isbn" }, "12-345678-910")
		),
	];
}

export default AnotherBook;
