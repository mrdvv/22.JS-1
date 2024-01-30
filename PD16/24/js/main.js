function calculateBMI(weight, height) {
  height = height / 100;
  let bmi = weight / (height * height);

  return bmi;
}

let weight = 70;
let height = 170;

let bmi = calculateBMI(weight, height);
console.log("BMI:", bmi);
