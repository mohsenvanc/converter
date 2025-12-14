const master = document.getElementById("B");
const Bmin = 20;
const Bmax = 50;

const sliders = [
  { id: "A", min: 20, max: 24, decimals: 1 },
  { id: "C", min: 10, max: 25, decimals: 1 },
  { id: "D", min: 0.2, max: 0.35, decimals: 2 },
  { id: "E", min: 0.7, max: 0.95, decimals: 2 },
  { id: "F", min: 0.25, max: 0.05, decimals: 2 }, // reversed
  { id: "G", min: 1000, max: 5000, decimals: 0 },
  { id: "H", min: 5, max: 25, decimals: 1 },
  { id: "I", min: 3, max: 30, decimals: 1 },
  { id: "J", min: 0.3, max: 0.9, decimals: 2 }
];

function updateSliders() {
  const Bvalue = Number(master.value);
  document.getElementById("BVal").textContent = Bvalue;

  sliders.forEach(s => {
    const slider = document.getElementById(s.id);
    const percent = (Bvalue - Bmin) / (Bmax - Bmin);
    const value = s.min + percent * (s.max - s.min);
    slider.value = value;

    document.getElementById(s.id + "Val").textContent =
      Number(value).toFixed(s.decimals);
  });
}

master.addEventListener("input", updateSliders);
updateSliders();
