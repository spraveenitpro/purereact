import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react/cjs/react.production.min";

function MyTable() {
	return (
		<table>
			<tbody>
				<Data />
			</tbody>
		</table>
	);
}

function Data() {
	return (
		<Fragment>
			<tr>Cell 1</tr>
			<tr>Cell 2</tr>
			<tr>Cell 3</tr>
		</Fragment>
	);
}

export default MyTable;
