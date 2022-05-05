// Bring up home page
var show_home = document.getElementById("show_home");

show_home.onclick = function() {
    student_page.style.display = "none";
    staff_page.style.display = "none";
}

// Bring up the student page
var student_page = document.getElementsByClassName("student_page")[0];
var show_student = document.getElementById("show_student");

show_student.onclick = function() {
    student_page.style.display = "block";
    staff_page.style.display = "none";
}

// Bring up form to add student
var student_form = document.getElementById("add_student_form");
var add_student = document.getElementById("add_student");

add_student.onclick = function() {
    student_form.style.display = "block";
}

// Bring up staff page
var staff_page = document.getElementsByClassName("staff_page")[0];
var show_staff = document.getElementById("show_staff");

show_staff.onclick = function() {
    staff_page.style.display = "block";
    student_page.style.display = "none";
}

// Bring up form to add staff
var staff_form = document.getElementById("add_staff_form");
var add_staff = document.getElementById("add_staff");

add_staff.onclick = function() {
    staff_form.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == student_form) {
	student_form.style.display = "none";
    }
    else if (event.target == staff_form) {
	staff_form.style.display = "none";
    }
}
