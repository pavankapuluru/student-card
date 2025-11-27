var students = [
    { name: "Pandu", age: 21, grade: 8.5, address: "Hyderabad", gender: "M" },
    { name: "Siri", age: 22, grade: 9.1, address: "Bangalore", gender: "F" },
    { name: "Rahul", age: 23, grade: 7.8, address: "Hyderabad", gender: "M" },
    { name: "Meera", age: 20, grade: 8.2, address: "Bangalore", gender: "F" },
    { name: "Teja", age: 24, grade: 6.9, address: "Hyderabad", gender: "M" },
    { name: "Latha", age: 19, grade: 9.0, address: "Bangalore", gender: "F" },
    { name: "Kiran", age: 22, grade: 7.5, address: "Hyderabad", gender: "M" },
    { name: "Divya", age: 21, grade: 8.8, address: "Bangalore", gender: "F" },
    { name: "Arjun", age: 25, grade: 7.2, address: "Hyderabad", gender: "M" },
    { name: "Neha", age: 20, grade: 8.9, address: "Bangalore", gender: "F" },
    { name: "Suman", age: 23, grade: 7.0, address: "Hyderabad", gender: "M" },
    { name: "Priya", age: 22, grade: 9.3, address: "Bangalore", gender: "F" },
];
var grid = document.getElementById("grid");
var search = document.getElementById("search");
if (!grid || !search) {
    throw new Error("HTML elements not found");
}
function showAll() {
    grid.innerHTML = "";
    students.forEach(function (s) {
        var card = "\n      <div class=\"card\">\n        <h3>".concat(s.name, "</h3>\n        <p>Age: ").concat(s.age, "</p>\n        <p>Grade: ").concat(s.grade, "</p>\n        <p>Address: ").concat(s.address, "</p>\n        <p>Gender: ").concat(s.gender, "</p>\n      </div>\n    ");
        grid.innerHTML += card;
    });
}
function searchStudent(text) {
    grid.innerHTML = "";
    var found = false;
    var numValue = Number(text);
    students.forEach(function (s) {
        var nameMatch = s.name.toLowerCase().includes(text.toLowerCase());
        var addressMatch = s.address.toLowerCase().includes(text.toLowerCase());
        var gradeMatch = !isNaN(numValue) && s.grade === numValue;
        if (nameMatch || addressMatch || gradeMatch) {
            found = true;
            var card = "\n        <div class=\"card\">\n          <h3>".concat(s.name, "</h3>\n          <p>Age: ").concat(s.age, "</p>\n          <p>Grade: ").concat(s.grade, "</p>\n          <p>Address: ").concat(s.address, "</p>\n          <p>Gender: ").concat(s.gender, "</p>\n        </div>\n      ");
            grid.innerHTML += card;
        }
    });
    if (!found) {
        grid.innerHTML = "<p>No Name found</p>";
    }
}
search.addEventListener("input", function () {
    var text = search.value.trim();
    if (text === "") {
        showAll();
    }
    else {
        searchStudent(text);
    }
});
showAll();
