const sliderA = document.getElementById("sliderA");
const sliderB = document.getElementById("sliderB");
const valueA = document.getElementById("valueA");
const valueB = document.getElementById("valueB");

sliderA.addEventListener("input", () => {
  const aMin = 10;
  const aMax = 16;
  const bMin = 20;
  const bMax = 35;

  const aValue = Number(sliderA.value);

  // Linear mapping
  const bValue =
    bMin + ((aValue - aMin) / (aMax - aMin)) * (bMax - bMin);

  sliderB.value = Math.round(bValue);

  valueA.textContent = aValue;
  valueB.textContent = Math.round(bValue);
});
