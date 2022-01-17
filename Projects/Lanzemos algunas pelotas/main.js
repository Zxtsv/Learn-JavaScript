var canvas = document.querySelector('canvas'); // ! Referencia al objetos canvas en el documento HTML

var ctx = canvas.getContext('2d'); // ! Con esto definimos un contexto en el cual se pueda comenzar a dibujar. Es decir, dibujar en el area del canvas

// * Varias asignaciones
var width = canvas.width = window.innerWidth; // ! Definiendo el ancho del canvas
var height = canvas.height = window.innerHeight; // ! Definiendo la altura del canvas

function random(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min; // ? Devuelve un número aleatorio
    return num;
}

function Ball(x, y, velX, velY, color, size) {
    this.x = x; //posición horizontal
    this.y = y; //posición vertical
    this.velX = velX; //velocidad horizontal
    this.velY = velY; //velocidad vertical
    this.color = color; //color
    this.size = size; //tamaño
}

// ! Dibujando las pelotas
Ball.prototype.draw = function() {
    ctx.beginPath(); // * Usado para declarar que empezaremos a dibujar una forma en el canvas.
    ctx.fillStyle = this.color; // * Usado para definir el color de la forma. Haremos que coincida con la propiedad color.
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); // * Usado para trazar un arco.
    ctx.fill(); // * Finaliza el dibujo y rellena el area
}

// ! Actualizando datos de la pelota
Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
  
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
  
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
  
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
  
    this.x += this.velX;
    this.y += this.velY;
}

var balls = [];

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
  
    while (balls.length < 25) {
      var size = random(10,20);
      var ball = new Ball(
        // la posición de las pelotas, se dibujará al menos siempre
        // como mínimo a un ancho de la pelota de distancia al borde del
        // canvas, para evitar errores en el dibujo
        random(0 + size,width - size),
        random(0 + size,height - size),
        random(-7,7),
        random(-7,7),
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
        size
      );
      balls.push(ball);
    }
  
    for (var i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].update();
    }
  
    requestAnimationFrame(loop);
}

loop();