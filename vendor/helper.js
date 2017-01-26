"use strict";
console.log(localStorage.Session);
if (localStorage.Session != 160914) {
	window.location.replace("./login.html");
}

	function logout() {
		localStorage.Session = "";
		window.location.replace("./login.html");
	}
