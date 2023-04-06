const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
function checkBmi() {
  weight = weightInput.value;
  height = heightInput.value;
  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  let status;
  if (weight & (height != null)) {
    if (bmi < 18.5) {
      status = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      status = "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      status = "Overweight";
    } else {
      bmi > 30;
      status = "Obesity";
    }
    document.getElementById("hasil").innerHTML =
      "Your BMI is <b>" +
      bmi +
      "</b> which means You are <b>" +
      status +
      "</b>";
  } else {
    alert("Inputan Tidak Boleh Kosong!");
  }
}
