// Get navbar buttons
// var home_button = document.getElementById("home_button");
// var students_button = document.getElementById("students_button");
// var staff_button = document.getElementById("staff_button");
// Get overviews
var all_overviews = document.getElementsByClassName("overview");
// var student_overiew = document.getElementById("student_overview");
// var staff_overview = document.getElementByID("staff_overview");

// Hide all overviews (helper function)
var hide_all = function() {
		for (var overview of all_overviews) {
				overview.style.display = "none";
		}
}

// Home Button
home_button.onclick = function() {
		hide_all();
}

// Display Students
students_button.onclick = function() {
		hide_all();
		student_overview.style.display = "flex";
}

// Display Staff
staff_button.onclick = function() {
		hide_all();
		staff_overview.style.display = "flex";
}

// Add Student Form
add_student_button.onclick = function() {
		hide_all();
		add_student_form.style.display = "flex";
}

function submitAddStudentForm(event) {
		event.preventDefault();
		var student_id = add_student.student_id.value;
		var student_name = add_student.name.value;
		var student_surname = add_student.surname.value;
		var student_dob = add_student.dob.value;
		var student_gender = add_student.gender.value;
		var student_department = add_student.department.value;
		var student_email = add_student.email.value;

		var tr = document.createElement("tr");
		tr.innerHTML = "<td>"+student_id+"</td>"
				+"<td>"+student_name+"</td>"
				+"<td>"+student_surname+"</td>"
				+"<td>"+student_dob.toString()+"</td>"
				+"<td>"+student_gender+"</td>"
				+"<td>"+student_department+"</td>"
				+"<td>"+student_email.toString()+"</td>"
		student_table.appendChild(tr);
		
		hide_all();
		student_overview.style.display = "flex";
}

cancel_add_student_form.onclick = function() {
		hide_all();
		student_overview.style.display = "flex";
		add_student_form.reset();
}

// Add Staff Form
add_staff_button.onclick = function() {
		hide_all();
		add_staff_form.style.display = "flex";
}

submit_add_staff_form.onclick = function() {
}

cancel_add_staff_form.onclick = function() {
		hide_all();
		staff_overview.style.display = "flex";
		add_staff_form.reset();
}
