/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEL = document.getElementById("mass-el");

const meterToFeet = 3.281;
const feetToMeter = 0.3048;
const literToGallon = 0.264;
const gallonToLiter = 3.78541;
const kiloToPound = 2.204;
const poundToKilo = 0.453592;

convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;

  let length = baseValue * meterToFeet;
  let feet = baseValue * feetToMeter;

  lengthEl.innerHTML = `${baseValue} meters = ${length.toFixed(
    3
  )} feet | ${baseValue} feet = ${feet.toFixed(3)} meters`;

  let volume = baseValue * literToGallon;
  let gallon = baseValue * gallonToLiter;

  volumeEl.innerHTML = `${baseValue} liters = ${volume.toFixed(
    3
  )} gallons | ${baseValue} gallons = ${gallon.toFixed(3)} liters`;

  let mass = baseValue * kiloToPound;
  let pound = baseValue * poundToKilo;

  massEL.innerHTML = `${baseValue} kilos = ${mass.toFixed(
    3
  )} pounds | ${baseValue} pounds = ${pound.toFixed(3)} kilos`;
});
