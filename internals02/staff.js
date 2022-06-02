// Get navbar buttons
var home_button = document.getElementById("home_button");
var courses_button = document.getElementById("courses_button");
// Get overview buttons
var mathematics_button = document.getElementById("mathematics_button");
var programming_button = document.getElementById("programming_button");
var computer_networks_button = document.getElementById("computer_networks_button");
// Get overviews
var all_overviews = document.getElementsByClassName("overview");
var course_overview = document.getElementById("course_overview");
var mathematics_students = document.getElementById("mathematics_students");
var programming_students = document.getElementById("programming_students");
var computer_networks_students = document.getElementById("computer_networks_students");

// Home Button
// function goes loops through all overviews and hides them
var hide_all = function() {
		for (var overview of all_overviews) {
				overview.style.display = "none";
		}
}
home_button.onclick = function(){
		hide_all();
}

// Display Courses
courses_button.onclick = function(){
		hide_all();
		course_overview.style.display = "flex";
}

// Display Mathematics Students
mathematics_button.onclick = function(){
		hide_all();
		mathematics_students.style.display = "flex";
}

// Display Programming Students
programming_button.onclick = function(){
		hide_all();
		programming_students.style.display = "flex";
}

// Display Computer Networks Students
computer_networks_button.onclick = function(){
		hide_all();
		computer_networks_students.style.display = "flex";
}

// Filter Students
function filterDepartment() {
		let selectedDepartment = document.getElementById("filter_department").value;
		let studentTable = document.getElementById("student_table");
		let tr = Array.from(studentTable.getElementsByTagName("tr")).slice(1);
		if (selectedDepartment == "") {
				for (var i of tr) {
						i.style.display = "";
				}
		} else {
				let trs = tr.filter(function(e) {
						return !e.innerText.includes(selectedDepartment);
				});
				for (var i of trs) {
						i.style.display = "none";
				}
		}
}

function filterSemester() {
		let selectedSemester = document.getElementById("filter_semester").value;
		let studentTable = document.getElementById("student_table");
		let tr = Array.from(studentTable.getElementsByTagName("tr")).slice(1);
		if (selectedSemester == "") {
				for (var i of tr) {
						i.style.display = "";
				}
		} else if (selectedSemester == "Winter") {
				for (var i of tr) {
						i.style.display = "";
				}
				let winter = [10, 11, 01, 02, 03];
				let trs = tr.filter(function(e) {
						var month = new Date(Date.parse(e.innerText.split("\t")[7])).getMonth() + 1;
						if (!winter.includes(month)) {
								return e;
						}
				});
				for (var i of trs) {
						i.style.display = "none";
				}
		} else if (selectedSemester == "Summer") {
				for (var i of tr) {
						i.style.display = "";
				}
				let summer = [04, 05, 06, 07, 08, 09];
				let trs = tr.filter(function(e) {
						var month = new Date(Date.parse(e.innerText.split("\t")[7])).getMonth() + 1;
						if (!summer.includes(month)) {
								return e;
						}
				});
				for (var i of trs) {
						i.style.display = "none";
				}
		}
}
