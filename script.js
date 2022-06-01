const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value; 

  if (height == "" || weight == "") {
    alert("Please fill out the input fields!");
    return;
  }

  // BMI = weight in KG / (height in m * height in m)

  let BMI = weight / (height / 100 * height / 100);

  BMI = BMI.toFixed(2);

  document.querySelector("#result").innerHTML = BMI;

  let status = "";

  if (BMI < 18.5) {
    status = "Underweight";
  }
  if (BMI >= 18.5 && BMI < 25) {
    status = "Healthy";
  }
  if (BMI >= 25 && BMI < 30) {
    status = "Overweight";
  }
  if (BMI >= 30) {
    status = "Obese";
  }
  document.querySelector(
    ".comment"
  ).innerHTML = `You are <span id="comment">${status}</span>`;
});

const btn2 = document.getElementById("calculate2");

btn2.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;
  let age = document.querySelector("#age").value;
  let gender = document.querySelector("#gender").value;

  if (height == "" || weight == "" ||age == "") {
    alert("Please fill out the input fields!");
    return;
  }

  // BMR = age in year / gender in female or male

  if (gender == "male") {
    a = 66.5; 
    b = 13.75;
    c = 5.003;
    d = 6.755;
    }
  else {
    a = 655.1;
    b = 9.563;
    c = 1.850;
    d = 4.676;
    } 
    
  let BMR = a + ( b * weight ) + ( c * height ) - ( d * age ) 

  BMR = BMR.toFixed(2);

  document.querySelector("#result2").innerHTML = BMR;
  document.querySelector(
    ".comment2"
  ).innerHTML = "Calories per day";
});