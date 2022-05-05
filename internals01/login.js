attempt = 3;

function login(){
    var admin_username = document.getElementById("admin_username").value;
    var admin_password = document.getElementById("admin_password").value;
    var staff_username = document.getElementById("staff_username").value;
    var staff_password = document.getElementById("staff_password").value;
    if (admin_username == "admin" && admin_password == "admin") {
	window.location = "admin.html";
	return false;
    }
    else if (staff_username == "staff" && staff_password == "staff") {
	window.location = "staff.html";
	return false;
    }
    else {
	attempt = attempt - 1;
	alert ("Login Credentials Incorrect.\nYou have "+attempt+" attempts left.");
	if (attempt == 0) {
	    document.getElementById("admin_username").disabled = true;
	    document.getElementById("admin_password").disabled = true;
	    document.getElementById("admin_submit").disabled = true;
	    document.getElementById("staff_username").disabled = true;
	    document.getElementById("staff_password").disabled = true;
	    document.getElementById("staff_submit").disabled = true;
	    return false;
	}
	else {
	    return false;
	}
    }
}
