let x;
let y;
let r = 100;
let n = 1;
let d = 1;
let maxN = 7;
let maxD = 9;
let k = n / d;
let t;
let points = [];
let deg = 0;
let dataFontSize = 13;
let titleFontSize = 30;
function setup() {
  createCanvas(600, 600);
  frameRate(1);
  r = width / 3;
  //angleMode(DEGREES);
  angleMode(RADIANS);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
    fs ? createCanvas(600, 600) : createCanvas(displayWidth, displayHeight);
    r = height / 4;
    dataFontSize = (13 * width) / 600;
    titleFontSize = (30 * width) / 600;
  }
}
function draw() {
  background("pink");
  stroke("purple");
  strokeWeight(0.1);
  translate(width / 2, height / 2);

  k = n / d;

  t = k >= 1 ? n * 360 : (4 * 360) / k;
  fill("purple");
  textSize(dataFontSize);
  text(
    `Rose: ${
      frameCount > maxD * maxN ? frameCount % (maxD * maxN) : frameCount
    }`,
    -width * 0.42,
    height * 0.4
  );

  text(`N: ${n}`, width * 0.4, height * 0.4);
  text(`D: ${d}`, width * 0.4, height * 0.43);
  text(`K: ${k.toFixed(2)}`, width * 0.4, height * 0.46);

  textSize(titleFontSize);

  text("Rhodonea Curves", -120, height * -0.42);
  for (let i = 0; i < t; i += 1) {
    x = r * cos(k * i) * cos(i);
    y = r * cos(k * i) * sin(i);
    points[i] = [x, y];
    points[i - 1] &&
      line(points[i][0], points[i][1], points[i - 1][0], points[i - 1][1]);
  }
  if (k < 1 && (d % 2 == 0 || n % 2 == 0)) {
    for (let i = 0; i < t; i += 1) {
      x = -r * cos(k * i) * cos(i);
      y = -r * cos(k * i) * sin(i);
      points[i] = [x, y];
      points[i - 1] &&
        line(points[i][0], points[i][1], points[i - 1][0], points[i - 1][1]);
    }
  }

  if (n < maxN) {
    n++;
  } else if (d < maxD) {
    d++;
    n = 1;
  } else {
    d = 1;
    n = 1;
  }
}
