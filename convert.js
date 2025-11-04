"use strict";

document.addEventListener("DOMContentLoaded", function() {
	const txt = document.getElementById("text-conversion").firstChild;
	txt.nodeValue = txt.nodeValue.replace(" ", "@")
		.replaceAll(" ", ".")
		.replaceAll("/g/g", "")
		.replaceAll("/oo/g", "u")
		.replaceAll("example", "seaflour");
};
