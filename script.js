const inputs = {
  wall: wall,
  roof: roof,
  floor: floor,
  u: uvalue,
  shgc: shgc,
  hrv: hrv,
  air: air
};

function calculate() {
  const wall = +inputs.wall.value;
  const roof = +inputs.roof.value;
  const floor = +inputs.floor.value;
  const u = +inputs.u.value;
  const shgc = +inputs.shgc.value;
  const hrv = +inputs.hrv.value;
  const air = +inputs.air.value;

  // Cost
  const cost =
    5 * wall +
    roof +
    floor / 2 +
    100 / u +
    10 / shgc +
    50 * hrv +
    100 / air;

  // TEDI
  const tedi =
    100 / wall +
    10 / roof +
    5 / floor +
    4 * u +
    2 / shgc +
    7 / hrv +
    air * 4;

  // TEUI & GHGI
  const teui = 4 * tedi;
  const ghgi = teui / 100;

  // Display input values
  wallVal.textContent = wall;
  roofVal.textContent = roof;
  floorVal.textContent = floor;
  uVal.textContent = u.toFixed(2);
  shgcVal.textContent = shgc.toFixed(2);
  hrvVal.textContent = hrv.toFixed(1);
  airVal.textContent = air.toFixed(2);

  // Display outputs
  costVal.textContent = cost.toFixed(1);
  tediVal.textContent = tedi.toFixed(2);
  teuiVal.textContent = teui.toFixed(2);
  ghgiVal.textContent = ghgi.toFixed(3);
}

// attach listeners
Object.values(inputs).forEach(slider =>
  slider.addEventListener("input", calculate)
);

calculate();
