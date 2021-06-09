//An aerial view of Boston. Image credit: HaizhanZheng/iStock

import { bostonData } from "./boston_data.js";
console.log("Boston INFO:");
console.log(bostonData);

var employee = [];
var peopleCounter = 0;
var dollarFormat = Intl.NumberFormat("en-US");

/*
import("./boston_data.js").then(({ bostonData }) => {
  console.log("Boston Info: " + bostonData);
});
*/
var picReference =
  "An aerial view of Boston. Image credit: HaizhanZheng/iStock";
console.log(picReference);

var picReferenceElement = document.getElementById("reference_block");
var backGroundImage = document.getElementById("main_image");
var referenceWidth;
var referenceLeft;
var direction = "foward";
//var referenceVelocity = 10;

function movePicReference() {
  switch (direction) {
    case "foward":
      referenceLeft = referenceLeft + 10;
      if (referenceLeft > 20) {
        referenceLeft = 20;
        direction = "stay";
      }
      setTimeout(movePicReference, 10);
      break;

    case "stay":
      if (referenceLeft > 0) {
        setTimeout(movePicReference, 5000);
        direction = "backward";
      }

      if (referenceLeft < 0) {
        setTimeout(movePicReference, 15000);
        direction = "foward";
      }
      break;

    case "backward":
      referenceLeft = referenceLeft - 10;
      if (referenceLeft < 0 - (referenceWidth + 20)) {
        referenceLeft = 0 - (referenceWidth + 20);
        direction = "stay";
      }
      setTimeout(movePicReference, 10);
      break;
  }

  picReferenceElement.style.left = referenceLeft + "px";
}

function createPicReference() {
  let textNode = document.createTextNode(picReference);
  picReferenceElement.appendChild(textNode);
  referenceWidth = picReferenceElement.offsetWidth;
  referenceLeft = 0 - (referenceWidth + 20);
  picReferenceElement.style.left = referenceLeft + "px";
  picReferenceElement.style.top = 80 + "vh";
  setTimeout(movePicReference, 3000);
  //console.log("JKJ");
}

function renderBoston(boston, container, container2) {
  //const len = boston.length; // posts is an array
  var person = boston.data;
  var len = boston.data.length;
  var html = "";
  peopleCounter = 0;
  for (let i = 0; i < len; i++) {
    employee.name = html +=
      '<li class="post">' +
      "<h2>" +
      person[i][8] +
      "</h2>" +
      "<h3>" +
      "$ " +
      dollarFormat.format(person[i][11]) +
      "</h3><br>";
    let salario = parseFloat(person[i][11]);
    //console.log("Salario: " + salario + "Other info: " + (salario + 1));
    //94460.92
    if (salario > 100000.0) {
      peopleCounter++;
      console.log(salario + ": : : " + peopleCounter);
      employee.push([person[i][8], person[i][11]]);
    }
  }
  employee.sort((a, b) => b[1].localeCompare(a[1])); //This sort the information of "employee" array.
  container.innerHTML = '<ul id = "boston">' + html + "</ul>";
  let top5 = employee.splice(0, 5);
  //console.log(top5);
  container2.innerHTML =
    "<p>In the Boston area, we can found " +
    peopleCounter +
    " employees that earn more than $100,000 a year.</p><br>" +
    "<p>This are the top 5:</p><br>" +
    '<ul id = "employee_count"><li>' +
    top5[0][0] +
    " - $" +
    dollarFormat.format(top5[0][1]) +
    "</li>" +
    "<li>" +
    top5[1][0] +
    " - $" +
    dollarFormat.format(top5[1][1]) +
    "</li>" +
    "<li>" +
    top5[2][0] +
    " - $" +
    dollarFormat.format(top5[2][1]) +
    "</li>" +
    "<li>" +
    top5[3][0] +
    " - $" +
    dollarFormat.format(top5[3][1]) +
    "</li>" +
    "<li>" +
    top5[4][0] +
    " - $" +
    dollarFormat.format(top5[4][1]) +
    "</li>" +
    "<ul/>";
}

renderBoston(
  bostonData,
  document.getElementById("full_list"),
  document.getElementById("fact_info")
);

setTimeout(createPicReference, 2000);
