function myFunction() {
  var student = {
    name: "Abir.",
    age: 13,
    grade: 8,
    address: "Savar, Dhaka.",
    school: "Palashbari Hazi Joynuddin School and Collage.",
    fav_color: "Black",
  };

  document.getElementById("name").innerHTML = student.name;
  document.getElementById("age").innerHTML = student.age;
  document.getElementById("grade").innerHTML = student.grade;
  document.getElementById("address").innerHTML = student.address;
  document.getElementById("school").innerHTML = student.school;
  document.getElementById("fav_color").innerHTML = student.fav_color;
}
