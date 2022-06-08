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
