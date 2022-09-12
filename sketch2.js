// function setup() {
//     createCanvas(windowWidth, windowHeight, WEBGL);
// } 

// function draw() {
//     background(50);
//     ambientLight(255);
//     let radius = width;
//     //drag to move the world.
//     orbitControl();
//     normalMaterial();
//     fill(10);
//     stroke(random(5, 245), 255, 255);
//     translate(0, 0, 0);
//     for (let i = 0; i <= 12; i++) {
//     for (let j = 0; j <= 12; j++) {
//         push();
//         let a = (j / 12) * PI;
//         let b = (i / 12) * PI;
//         translate(
//           sin(2 * a) * radius * sin(b),
//           (cos(b) * radius) / 2,
//           cos(2 * a) * radius * sin(b)
//         );
//         if (j % 2 === 0) {
//         sphere(30);
//         } else {
//         box(30, 30, 30);
//         }
//         pop();
//     }
//     }
// }