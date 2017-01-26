"use strict";
	$('#lblmessage').hide();

	function createLogin() {
		var id = $('#id').val();
		var password = $('#password').val();

		if(id === 'root' & password === 'secretsystem') {
			localStorage.Session = 160914;
			window.location.replace("./index.html");
		} 
		$('#lblmessage').show();
	}

	function logout() {
		localStorage.Session = "";
		window.location.replace("./login.html");
	}
