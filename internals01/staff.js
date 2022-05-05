var show_home = document.getElementById("show_home");
var course_table = document.getElementsByClassName("course_table")[0];
var show_courses = document.getElementById("show_courses");
var student_table = document.getElementsByClassName("student_table")[0];
var show_students = document.getElementById("show_students");
var courses_selector = document.getElementById("courses");
var mathematics = document.getElementById("mathematics");
var programming = document.getElementById("programming");
var computer_networks = document.getElementById("computer_networks");

show_home.onclick = function() {
    course_table.style.display = "none";
    student_table.style.display = "none";
}

show_courses.onclick = function() {
    course_table.style.display = "flex";
    student_table.style.display = "none";
}

show_students.onclick = function() {
    course_table.style.display = "none";
    student_table.style.display = "flex";
}

courses.onclick = function() {
    var courses_option = document.querySelector("#courses").selectedIndex;

    if (courses_option == 0) {
	mathematics.style.display = "none";
	programming.style.display = "none";
	computer_networks.style.display = "none";
    }
    else if (courses_option == 1) {
	mathematics.style.display = "inline";
	programming.style.display = "none";
	computer_networks.style.display = "none";
    }
    else if (courses_option == 2) {
	mathematics.style.display = "none";
	programming.style.display = "inline";
	computer_networks.style.display = "none";
    }
    else if (courses_option == 3) {
	mathematics.style.display = "none";
	programming.style.display = "none";
	computer_networks.style.display = "inline";
    }
}
