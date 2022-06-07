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

// Filter Students
function table_filter() {
		function filterDepartment() {
				let trs = Array.from(tr).filter(function(e) {
						return (e.innerText.includes("Department") || e.innerText.includes(selectedDepartment));
				});
				for (var i of trs) {
						i.style.display = "";
				}
		}
		function filterSemester() {
				let trs = Array.from(tr).filter(function(e) {
						let winter = [10, 11, 12, 01, 02, 03];
						let summer = [04, 05, 06, 07, 08, 09];
						var month = new Date(Date.parse(e.innerHTML.split("<td>")[8].split("</td>")[0])).getMonth() + 1;
						if (e.innerText.includes("Joining Date")) {
								return true;
						}
						else if (selectedSemester == "Winter" && winter.includes(month)) {
								return true;
						}
						else if (selectedSemester == "Summer" && summer.includes(month)) {
								return true;
						}
						else {
								return false;
						}
				})
				for (var i of trs) {
						i.style.display = "";
				}
		}
		function filterBoth() {
				let trs = Array.from(tr).filter(function(e) {
						let winter = [10, 11, 12, 01, 02, 03];
						let summer = [04, 05, 06, 07, 08, 09];
						if (e.innerText.includes("Student ID")) {
								return e;
						}
						else if (e.innerText.includes(selectedDepartment)){
								var month = new Date(Date.parse(e.innerHTML.split("<td>")[8].split("</td>")[0])).getMonth() + 1;
								if (selectedSemester == "Winter" && winter.includes(month)) {
										return e;
								}
								else if (selectedSemester == "Summer" && summer.includes(month)) {
										return e;
								}
						}
				});
				for (var i of trs) {
						i.style.display = "";
				}
		}

		let selectedDepartment = document.getElementById("filter_department").value;
		let selectedSemester = document.getElementById("filter_semester").value;
		let tables = document.getElementById("courses");
		let tr = tables.getElementsByTagName("tr");

		if (selectedDepartment == "" && selectedSemester == "") {
				for (var i of tr) {
						i.style.display = "";
				}
		}
		else if (selectedSemester == "") {
				for (var i of tr) {
						i.style.display = "none";
				}
				filterDepartment();
		}
		else if (selectedDepartment == "") {
				for (var i of tr) {
						i.style.display = "none";
				}
				filterSemester();
		}
		else {
				for (var i of tr) {
						i.style.display = "none";
				}
				filterBoth();
		}
}


// Add Student Form
add_student_button.onclick = function() {
		hide_all();
		add_student_form.style.display = "flex";
}

function submitAddStudentForm(event) {
		event.preventDefault();

		// Check DOB
		var currentDate = new Date();
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
		var min17 = new Date();
		min17.setFullYear(min17.getFullYear() - 17);
		var max60 = new Date();
		max60.setFullYear(max60.getFullYear() - 60);
		var student_dob = new Date(Date.parse(add_student.dob.value));
		if (student_dob.valueOf() > currentDate.valueOf()) {
				alert("Invalid DOB");
		}
		else if (student_dob.valueOf() > min17.valueOf()) {
				alert("Invalid DOB");
		} else if  (student_dob.valueOf() < max60.valueOf()) {
				alert("Invalid DOB");
		}

		// Check Joining Date
		var earliestJoin = new Date(2015, 0);
		var joiningDate = new Date(add_student.joining_date.value);
		if (joiningDate < earliestJoin) {
				alert("Invalid Joining Date");
		}
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

function submitAddStaffForm(event) {
		event.preventDefault();
}

cancel_add_staff_form.onclick = function() {
		hide_all();
		staff_overview.style.display = "flex";
		add_staff_form.reset();
}
