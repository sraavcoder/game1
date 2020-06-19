var to1, to2, to3, m1, m2, m3, b1, b2, b3;
var t11, t22, t33, m11, m22, m33, b11, b22, b33;
var t111, t222, t333, m111, m222, m333, b111, b222, b333;
var t1111, t2222, t3333, m1111, m2222, m3333, b1111, b2222, b3333;
var a, b, c, d, e, f, g, h, i;
var s1, s2, s3, s4, s5, s6, s7, s8, s9;
var t01, t02, t03, t04, t05, t06, t07, t08, t09;
var v1, v2, v3, v4, v5, v6, v7, v8, v9;
var n1, n2, n3, n4, n5, n6, n7, n8, n9;

var t1, t2, t3, t4, t5, t6, t7, t8, t9;

var I1, I2, I3, I4, I5, I6, I7, I8, I9;

var ok = false;

var s = 0.5;

var sp = [];
var im = [];
var im2 = [];
var im3 = [];
var im4 = [];
var im5 = [];
var im6 = [];
var im7 = [];
var im8 = [];
var im9 = [];

var test = [null, null, null, null, null, null, null, null];

var image1, image2, image3, image4, image5, image6, image7, image8, image9;

var mage;

var moves = 0;

var gameState = 0;

var x1 = 245;
var y1 = 300;
var x2 = 395;
var y2 = 300;
var x3 = 245;
var y3 = 450;
var x4 = 395;
var y4 = 450;
var x5 = 245;
var y5 = 600;
var x6 = 395;
var y6 = 600;
var x7 = 545;
var y7 = 300;
var x8 = 545;
var y8 = 450;
var x9 = 545;
var y9 = 600;

var mx = 125;
var my = 100;

var mark = [0, 0, 0, 0, 0, 0, 0, 0];

function preload() {
  to1 = loadImage("images/top1.jpg");
  to2 = loadImage("images/top2.jpg");
  to3 = loadImage("images/top3.jpg");
  m1 = loadImage("images/mid1.jpg");
  m2 = loadImage("images/mid2.jpg");
  m3 = loadImage("images/mid3.jpg");
  b1 = loadImage("images/bottom1.jpg");
  b2 = loadImage("images/bottom2.jpg");
  b3 = loadImage("images/bottom3.jpg");
  im = [to1, to2, to3, m1, m3, b1, b2, b3];

  image1 = loadImage("images/m.jpg");
  image2 = loadImage("image2/m.jpg");

  t11 = loadImage("image2/top1.jpg");
  t22 = loadImage("image2/top2.jpg");
  t33 = loadImage("image2/top3.jpg");
  m11 = loadImage("image2/mid1.jpg");
  m22 = loadImage("image2/mid2.jpg");
  m33 = loadImage("image2/mid3.jpg");
  b11 = loadImage("image2/bottom1.jpg");
  b22 = loadImage("image2/bottom2.jpg");
  b33 = loadImage("image2/bottom3.jpg");
  im2 = [t11, t22, t33, m11, m33, b11, b22, b33];
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  //windowWidth,windowHeight
  //400,600

  heading = createElement("h2");
  heading.html("   SLIDE PUZZLE   ");
  heading.position(width / 3 - 20, 60);
  heading.style("font-size", (width / 30) * 2 + "px");

  next = createButton("START THE GAME");
  next.position(width / 2.5 - 30, height / 1.5);
  next.style("background-color", color(162, 239, 234));
  next.style("border-radius", "30px");
  // next.style("width",width/30+'%');
  next.style("height", width / 80 + "%");
  next.style("font-size", (width / 65) * 2 + "px");

  next.mousePressed(() => {
    gameState = 1;
    heading.hide();
    // heading.position(width/2.5,5);
    // heading.style("font-size",width/50+'px');
    next.hide();

    select2 = createButton("Select");
    select2.style("background-color", color(162, 239, 234));
    select2.style("border-radius", "30px");
    select2.style("height", "50px");
    select2.style("width", "120px");
    select2.style("font-size", "27px");
    select2.position(width / 2 - 50, 0 + height / 3 + 360);
    select2.mousePressed(() => {
      if (width > 850) {
        heading.show();
        heading.position(width / 3 + 100, 20);
        heading.style("font-size", width / 50 + "px");
      } else if (width < 850) {
        heading.show();
        heading.position(width / 3 + 70, 20);
        heading.style("font-size", width / 20 + "px");
      }
      if (width >= 850) {
        s = 0.171;
      } else if (width < 850) {
        s = 0.43;
      }
      createSprites();
      sp = [t1, t2, t3, t5, t6, t7, t8, t9];

      select2.hide();

      I2.x = 5000;

      if (width < 850) {
        mx = width / 5 - 5;
        my = 100;
      }
      mx = 170;
      my = 170;
      mage = createSprite(mx, my);
      mage.addImage(image2);
      if (width >= 850) {
        mage.scale = 0.1175;
      }
      if (width < 850) {
        mage.scale = 0.15;
      }
    });

    chooseImage();
  });
}

function chooseImage() {
  var s21 = 0.185;
  var s22 = (width / 6400) * 2.5;

  I2 = createSprite(width / 2, height / 6 + 220);
  I2.addImage(image2);
  I2.scale = (width / 6400) * 2;
  if (width < 850) {
    I2.scale = s22;
  }
  if (width >= 850) {
    I2.scale = s21;
  }
}

function createSprites() {
  if (width < 850) {
    x1 = width / 2 - 105;
    x2 = width / 2;
    x7 = width / 2 + 105;
    x8 = width / 2 + 105;
    x9 = width / 2 + 105;
    x4 = width / 2;
    x3 = width / 2 - 105;
    x5 = width / 2;
    x6 = width / 2 - 105;
    y1 = height / 2 - 10;
    y2 = height / 2 - 10;
    y3 = height / 2 - 10 + 105;
    y4 = height / 2 - 10 + 105;
    y5 = height / 2 - 10 + 105 + 105;
    y6 = height / 2 - 10 + 105 + 105;
    y7 = height / 2 - 10;
    y8 = height / 2 - 10 + 105;
    y9 = height / 2 - 10 + 105 + 105;
  } else if (width >= 850) {
    x1 = width / 2 - 150;
    x2 = width / 2;
    x7 = width / 2 + 150;
    x8 = width / 2 + 150;
    x9 = width / 2 + 150;
    x4 = width / 2;
    x3 = width / 2 - 150;
    x5 = width / 2;
    x6 = width / 2 - 150;
    y1 += 80;
    y2 += 80;
    y3 += 80;
    y4 += 80;
    y5 += 80;
    y6 += 80;
    y7 += 80;
    y8 += 80;
    y9 += 80;
  }

  // t11 = loadImage("image2/top1.jpg");
  // t22 = loadImage("image2/top2.jpg");
  // t33 = loadImage("image2/top3.jpg");
  // m11 = loadImage("image2/mid1.jpg");
  // m22 = loadImage("image2/mid2.jpg");
  // m33 = loadImage("image2/mid3.jpg");
  // b11 = loadImage("image2/bottom1.jpg");
  // b22 = loadImage("image2/bottom2.jpg");
  // b33 = loadImage("image2/bottom3.jpg");

  t1 = createSprite(x1, y1, 65, 65);
  t1.addImage(b33);
  t1.scale = s;
  t2 = createSprite(x2, y2, 65, 65);
  t2.addImage(t11);
  t2.scale = s;
  t3 = createSprite(x3, y3, 65, 65);
  t3.addImage(t33);
  t3.scale = s;
  t4 = createSprite(x4, y4, 50, 50);
  t4.shapeColor = color(0, 179, 223);
  t5 = createSprite(x5, y5, 65, 65);
  t5.addImage(t22);
  t5.scale = s;
  t6 = createSprite(x6, y6, 65, 65);
  t6.addImage(m11);
  t6.scale = s;
  t7 = createSprite(x7, y7, 65, 65);
  t7.addImage(b22);
  t7.scale = s;
  t8 = createSprite(x8, y8, 65, 65);
  t8.addImage(m33);
  t8.scale = s;
  t9 = createSprite(x9, y9, 65, 65);
  t9.addImage(b11);
  t9.scale = s;
}

function contains(pick) {
  //return true if the number is in the grid else false.
  for (var i = 0; i < sp.length; i++) {
    if (test[i] === pick && test[i] !== null) {
      return true;
    }
  }
  return false;
}

function moveSprites() {
  var d11 = t4.x - t1.x;
  var d12 = t1.x - t4.x;
  var d13 = t4.y - t1.y;
  var d14 = t1.y - t4.y;

  var d21 = t4.x - t2.x;
  var d22 = t2.x - t4.x;
  var d23 = t4.y - t2.y;
  var d24 = t2.y - t4.y;

  var d31 = t4.x - t3.x;
  var d32 = t3.x - t4.x;
  var d33 = t4.y - t3.y;
  var d34 = t3.y - t4.y;

  var d41 = t4.x - t5.x;
  var d42 = t5.x - t4.x;
  var d43 = t4.y - t5.y;
  var d44 = t5.y - t4.y;

  var d51 = t4.x - t6.x;
  var d52 = t6.x - t4.x;
  var d53 = t4.y - t6.y;
  var d54 = t6.y - t4.y;

  var d61 = t4.x - t7.x;
  var d62 = t7.x - t4.x;
  var d63 = t4.y - t7.y;
  var d64 = t7.y - t4.y;

  var d71 = t4.x - t8.x;
  var d72 = t8.x - t4.x;
  var d73 = t4.y - t8.y;
  var d74 = t8.y - t4.y;

  var d81 = t4.x - t9.x;
  var d82 = t9.x - t4.x;
  var d83 = t4.y - t9.y;
  var d84 = t9.y - t4.y;

  if (t4.scale == 0.171) {
    d11 = 1;
    d12 = 1;
    d13 = 1;
    d14 = 1;

    d21 = 1;
    d22 = 1;
    d23 = 1;
    d24 = 1;

    d31 = 1;
    d32 = 1;
    d33 = 1;
    d34 = 1;

    d41 = 1;
    d42 = 1;
    d43 = 1;
    d44 = 1;

    d51 = 1;
    d52 = 1;
    d53 = 1;
    d54 = 1;

    d61 = 1;
    d62 = 1;
    d63 = 1;
    d64 = 1;

    d71 = 1;
    d72 = 1;
    d73 = 1;
    d74 = 1;

    d81 = 1;
    d82 = 1;
    d83 = 1;
    d84 = 1;
  }
  if (
    (t1.x + d11 == t4.x && t1.y == t4.y) ||
    (t1.x - d12 == t4.x && t1.y == t4.y && d12 < 5) ||
    (t1.y + d13 == t4.y && t1.x == t4.x && d13 < 5) ||
    (t1.y - d14 == t4.y && t1.x == t4.x && d14 < 5)
  ) {
    if (
      mousePressedOver(t1) &&
      d11 < 160 &&
      d12 < 160 &&
      d13 < 160 &&
      d14 < 160
    ) {
      var x = t1.x;
      var y = t1.y;
      t1.x = t4.x;
      t1.y = t4.y;
      t4.x = x;
      t4.y = y;
      moves = moves + 1;
    }
  }
  if (
    (t2.x + d21 == t4.x && t2.y == t4.y) ||
    (t2.x - d22 == t4.x && t2.y == t4.y) ||
    (t2.y + d23 == t4.y && t2.x == t4.x) ||
    (t2.y - d24 == t4.y && t2.x == t4.x)
  ) {
    if (
      mousePressedOver(t2) &&
      d21 < 160 &&
      d22 < 160 &&
      d23 < 160 &&
      d24 < 160
    ) {
      var x = t2.x;
      var y = t2.y;
      t2.x = t4.x;
      t2.y = t4.y;
      t4.y = y;
      t4.x = x;
      moves = moves + 1;
    }
  }
  if (
    (t3.x + d31 == t4.x && t3.y == t4.y) ||
    (t3.x - d32 == t4.x && t3.y == t4.y) ||
    (t3.y + d33 == t4.y && t3.x == t4.x) ||
    (t3.y - d34 == t4.y && t3.x == t4.x)
  ) {
    if (
      mousePressedOver(t3) &&
      d31 < 160 &&
      d32 < 160 &&
      d33 < 160 &&
      d34 < 160
    ) {
      var x = t3.x;
      var y = t3.y;
      t3.x = t4.x;
      t3.y = t4.y;
      t4.y = y;
      t4.x = x;
      moves = moves + 1;
    }
  }
  if (
    (t5.x + d41 == t4.x && t5.y == t4.y) ||
    (t5.x - d42 == t4.x && t5.y == t4.y) ||
    (t5.y + d43 == t4.y && t5.x == t4.x) ||
    (t5.y - d44 == t4.y && t5.x == t4.x)
  ) {
    if (
      mousePressedOver(t5) &&
      d41 < 160 &&
      d42 < 160 &&
      d43 < 160 &&
      d44 < 160
    ) {
      var x = t5.x;
      var y = t5.y;
      t5.x = t4.x;
      t5.y = t4.y;
      t4.y = y;
      t4.x = x;
      moves = moves + 1;
    }
  }
  if (
    (t6.x + d51 == t4.x && t6.y == t4.y) ||
    (t6.x - d52 == t4.x && t6.y == t4.y) ||
    (t6.y + d53 == t4.y && t6.x == t4.x) ||
    (t6.y - d54 == t4.y && t6.x == t4.x)
  ) {
    if (
      mousePressedOver(t6) &&
      d51 < 160 &&
      d52 < 160 &&
      d53 < 160 &&
      d54 < 160
    ) {
      var x = t6.x;
      var y = t6.y;
      t6.x = t4.x;
      t6.y = t4.y;
      t4.y = y;
      t4.x = x;
      moves = moves + 1;
    }
  }
  if (
    (t7.x + d61 == t4.x && t7.y == t4.y) ||
    (t7.x - d62 == t4.x && t7.y == t4.y) ||
    (t7.y + d63 == t4.y && t7.x == t4.x) ||
    (t7.y - d64 == t4.y && t7.x == t4.x)
  ) {
    if (
      mousePressedOver(t7) &&
      d61 < 160 &&
      d62 < 160 &&
      d63 < 160 &&
      d64 < 160
    ) {
      var x = t7.x;
      var y = t7.y;
      t7.x = t4.x;
      t7.y = t4.y;
      t4.y = y;
      t4.x = x;
      moves = moves + 1;
    }
  }
  if (
    (t8.x + d71 == t4.x && t8.y == t4.y) ||
    (t8.x - d72 == t4.x && t8.y == t4.y) ||
    (t8.y + d73 == t4.y && t8.x == t4.x) ||
    (t8.y - d74 == t4.y && t8.x == t4.x)
  ) {
    if (
      mousePressedOver(t8) &&
      d71 < 160 &&
      d72 < 160 &&
      d73 < 160 &&
      d74 < 160
    ) {
      var x = t8.x;
      var y = t8.y;
      t8.x = t4.x;
      t8.y = t4.y;
      t4.y = y;
      t4.x = x;
      moves = moves + 1;
    }
  }
  if (
    (t9.x + d81 == t4.x && t9.y == t4.y) ||
    (t9.x - d82 == t4.x && t9.y == t4.y) ||
    (t9.y + d83 == t4.y && t9.x == t4.x) ||
    (t9.y - d84 == t4.y && t9.x == t4.x)
  ) {
    if (
      mousePressedOver(t9) &&
      d81 < 160 &&
      d82 < 160 &&
      d83 < 160 &&
      d84 < 160
    ) {
      var x = t9.x;
      var y = t9.y;
      t9.x = t4.x;
      t9.y = t4.y;
      t4.y = y;
      t4.x = x;
      moves = moves + 1;
    }
  }

  if (width >= 850) {
    x1 = width / 2 - 150;
    x2 = width / 2;
    x7 = width / 2 + 150;
    x8 = width / 2 + 150;
    x9 = width / 2 + 150;
    x4 = width / 2;
    x3 = width / 2 - 150;
    x5 = width / 2;
    x6 = width / 2 - 150;
    y1 += 80;
    y2 += 80;
    y3 += 80;
    y4 += 80;
    y5 += 80;
    y6 += 80;
    y7 += 80;
    y8 += 80;
    y9 += 80;
  }
  console.log(t6.y);
  if (
    t1.x == width / 2 + 150 &&
    t1.y == 680 &&
    t2.x == width / 2 - 150 &&
    t2.y == 380 &&
    t3.x == width / 2 + 150 &&
    t3.y == 380 &&
    t5.x == width / 2 &&
    t5.y == 380 &&
    t6.x == width / 2 - 150 &&
    t6.y == 530 &&
    t7.x == width / 2 &&
    t7.y == 680 &&
    t8.x == width / 2 + 150 &&
    t8.y == 530 &&
    t9.x == width / 2 - 150 &&
    t9.y == 680
  ) {
    t4.addImage(m22);
    t4.scale = 0.171;
  }
}

function draw() {
  background(0, 179, 223);
  fill("white");

  var textposition = width / 2 + 120;
  if (width < 850) {
    textposition = width / 2 + 40;
  }

  // t1 = createSprite(x1, y1, 65, 65);
  // t1.addImage(b33);
  // t1.scale = s;
  // t2 = createSprite(x2, y2, 65, 65);
  // t2.addImage(t11);
  // t2.scale = s;
  // t3 = createSprite(x3, y3, 65, 65);
  // t3.addImage(t33);
  // t3.scale = s;
  // t4 = createSprite(x4, y4, 50, 50);
  // t4.shapeColor = color(0, 179, 223);
  // t5 = createSprite(x5, y5, 65, 65);
  // t5.addImage(t22);
  // t5.scale = s;
  // t6 = createSprite(x6, y6, 65, 65);
  // t6.addImage(m11);
  // t6.scale = s;
  // t7 = createSprite(x7, y7, 65, 65);
  // t7.addImage(b22);
  // t7.scale = s;
  // t8 = createSprite(x8, y8, 65, 65);
  // t8.addImage(m33);
  // t8.scale = s;
  // t9 = createSprite(x9, y9, 65, 65);
  // t9.addImage(b11);
  // t9.scale = s;

  // x1 = width / 2 - 150;
  // x2 = width / 2;
  // x7 = width / 2 + 150;
  // x8 = width / 2 + 150;
  // x9 = width / 2 + 150;
  // x4 = width / 2;
  // x3 = width / 2 - 150;
  // x5 = width / 2;
  // x6 = width / 2 - 150;
  // y1 += 80;
  // y2 += 80;
  // y3 += 80;
  // y4 += 80;
  // y5 += 80;
  // y6 += 80;
  // y7 += 80;
  // y8 += 80;
  // y9 += 80;

  // var t1, t2, t3, t4, t5, t6, t7, t8, t9;

  if (t1 && t2 && t3 && t4 && t5 && t6 && t7 && t8 && t9) {
    moveSprites();
    // drawGrid();
    textSize(20);
    text("MOVES  :    " + moves, textposition, 200);
  }

  drawSprites();
}
