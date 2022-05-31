// Setting attempt counter
staff_attempts = 3;
admin_attempts = 3;


// Staff login
var staff_login = document.getElementById("staff_login");
var staff_username = document.getElementById("staff_username");
var staff_password = document.getElementById("staff_password");
var staff_warning = document.getElementById("staff_warning");

staff_login.onclick = function(){
		if ((staff_username.value == "staff") && (staff_password.value == "staff")){
				window.location.href = "staff.html";
				return false;
		} else {
				staff_attempts -= 1;
				alert("Wrong Password or Username\n"+staff_attempts+" attempts remaining");
				// Clear input
				staff_username.value = "";
				staff_password.value = "";
				// Lockout
				if (staff_attempts == 0){
						staff_warning.style.display = "flex";
						staff_username.disabled = true;
						staff_password.disabled = true;
						staff_login.disabled = true;
				}
				return false;
		}
}


// Admin login
var admin_login = document.getElementById("admin_login");
var admin_username = document.getElementById("admin_username");
var admin_password = document.getElementById("admin_password");
var admin_warning = document.getElementById("admin_warning");

admin_login.onclick = function(){
		if ((admin_username.value == "admin") && (admin_password.value == "admin")){
				window.location.href = "admin.html";
				return false;
		} else {
				admin_attempts -= 1;
				alert("Wrong Password or Username\n"+admin_attempts+" attempts remaining");
				admin_username.value = "";
				admin_password.value = "";
				if (admin_attempts == 0){
						admin_warning.style.display = "flex";
						admin_username.disabled = true;
						admin_password.disabled = true;
						admin_login.disabled = true;
				}
				return false;
		}
}
