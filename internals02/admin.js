function showFilters() {
		document.getElementById("filters").style.display = "inline";
}

function hideOverviews() {
		var overviews = document.getElementsByClassName("overview");
		for (var overview of overviews) {
				overview.style.display = "none";
		}
}

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
						let winter = [10, 11, 01, 02, 03];
						let summer = [04, 05, 06, 07, 08, 09];
						if (e.innerText.includes("Student ID")) {
								return e;
						}
						var month = new Date(Date.parse(e.innerHTML.split("<td>")[8].split("</td>")[0])).getMonth() + 1;
						if (selectedSemester == "Winter" && winter.includes(month)) {
								return e;
						}
						else if (selectedSemester == "Summer" && summer.includes(month)) {
								return e;
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
		let tables = document.getElementById("students");
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

function addStudent() {
		event.preventDefault();

		// Check DOB
		var current_date = new Date();
		var min17 = new Date();
		var max60 = new Date();
		current_date = new Date(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());
		min17.setFullYear(min17.getFullYear() - 17);
		max60.setFullYear(max60.getFullYear() - 60);
		var student_dob = new Date(
				Date.parse(
						document.getElementById("add_student")[3].value
				)
		);

		if (student_dob > current_date) {
				alert("Invalid DOB");
		}
		else if (student_dob > min17) {
				alert("Invalid DOB");
		}
		else if (student_dob < max60) {
				alert("Invalid DOB");
		}

		// Check Joining Date
		var earliest_join = new Date(2015, 0);
		var joining_date = new Date(
				Date.parse(document.getElementById("add_student")[9].value)
		);
		if (joining_date < earliest_join) {
				alert("Invalid Joining Date");
		}
}

function addStaff() {
		event.preventDefault();
		
		// Check DOB
		var current_date = new Date();
		current_date = new Date(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());
		var staff_dob = new Date(
				Date.parse(document.getElementById("add_staff")[3].value)
		);

		if (staff_dob > current_date) {
				alert("Invalid DOB");
		}
}

let home_button = document.getElementById("home_button");
let students_button = document.getElementById("students_button");
let staff_button = document.getElementById("staff_button");
let add_student_button = document.getElementById("add_student_button");
let add_staff_button = document.getElementById("add_staff_button");

home_button.onclick = function() {
		hideOverviews();
}

students_button.onclick = function() {
		hideOverviews();
		showFilters();
		document.getElementById("student_overview").style.display = "flex";
}

staff_button.onclick = function() {
		hideOverviews();
		document.getElementById("staff_overview").style.display = "flex";
}

add_student_button.onclick = function() {
		hideOverviews();
		document.getElementById("student_form").style.display = "flex";
}

add_staff_button.onclick = function() {
		hideOverviews();
		document.getElementById("staff_form").style.display = "flex";
}
