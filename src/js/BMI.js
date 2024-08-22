const weight = document.querySelector("#weight");
const height = document.querySelector("#height");

function calculate() {
  if (
    weight.value != undefined &&
    weight.value != "" &&
    height.value != undefined &&
    height.value != ""
  ) {
    let w = Number(weight.value);
    let h = Number(height.value) / 100;

    let res = Math.floor((w / (h * h)) * 100) / 100;

    document.querySelector("#res").classList.remove("hidden");
    document.querySelector("#res > h1").innerHTML = `Your BMI is ${res}`;
  }
}
