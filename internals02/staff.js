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
