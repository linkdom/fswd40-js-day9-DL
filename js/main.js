function crystalGazer (job_title, location, partners_name, number_childrens) {
  document.getElementById('satz').innerHTML = "You will be a " + job_title + "in " + location + "and married to " + partners_name + "with " + number_childrens + "childrens.";
}

crystalGazer("Web Developer ", "Wien ", "Lena ", "3 ");

function ageCalculator (birth_year, current_year) {
  var age = current_year - birth_year;
  var age2 = current_year - 1 - birth_year;
  return document.getElementById('agecalc').innerHTML = "you are either " + age2 + " or " + age;
}

ageCalculator (1994, 2018)

function agecalcnew (birth_year) {
  current_year = new Date().getFullYear();
  var age3 = current_year - 1 - birth_year;
  var age4 = current_year - birth_year;
  return document.getElementById('agecalcnew2').innerHTML = "you are either " + age3 + " or " + age4;
}

agecalcnew (1994)

function degreecalc (degree) {
  var sum =degree * (Math.PI / 180);
  return document.getElementById('degree').innerHTML = degree + " degrees are " + sum + " radiants.";
}

degreecalc (90)

function area (width, height) {
  var sum = width * height;
  return document.getElementById('area').innerHTML = "The Area of the Box is: " + sum;
}

area (7, 2)

function volume (width, height, depth) {
  var sum2 = width * height * depth;
  return document.getElementById("volume").innerHTML = "The volume of the box is: " + sum2;
}

volume (7, 2, 5)


function areavolume (width, height, depth) {
  var width = 7;
  var height = 2;
  var depth = width - height;
  var area = width * height;
  var volume = width * height * depth;
  document.getElementById('areavol1').innerHTML = "The Area of the Box is: " + area;
  document.getElementById("areavol2").innerHTML = "The volume of the box is: " + volume;
}

areavolume ()
