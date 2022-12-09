function preload(){
    img = loadImage('Hat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}
img = "";

function draw() {
    image(img, 0, 0, 640, 420);
   fill("#0000FF");
   text("Hat", 45, 75);
   noFill();
   stroke("#0000FF");
   rect(30, 70, 600, 450 );
}

