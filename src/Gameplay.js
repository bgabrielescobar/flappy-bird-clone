import { GREEN, YELLOW, RED, BLUE } from "./ColorEnum";

function keyDown({ flappy }) {
  flappy.acceleration -= 10;
}

function draw({ ctx, Colors, flappy, score, pipes }) {
  ctx.fillStyle = Colors[YELLOW];
  ctx.fillRect(flappy.x, flappy.y, flappy.width, flappy.height);

  ctx.fillStyle = Colors[GREEN];
  for (let i = 0; i < pipes.length; i++) {
    ctx.fillRect(pipes[i].x, pipes[i].y, pipes[i].width, pipes[i].height);
  }

  ctx.fillStyle = "White";
  ctx.font = "80px Arial";
  ctx.fillText(score, window.innerWidth / 2 - 80, 80);
}

function control(gameContext) {
  let { flappy, pipes, score, canGetPoint } = gameContext;

  flappy.update();
  for (let x = 0; x < pipes.length; x++) {
    pipes[x].update();
  }

  //CHECK COLLISION WITH PIPES
  if (
    (flappy.x + flappy.width > pipes[0].x &&
      flappy.x + flappy.width < pipes[0].x + pipes[0].width &&
      (flappy.y + flappy.height > pipes[0].y &&
        flappy.y + flappy.height < pipes[0].y + pipes[0].height)) ||
    (flappy.x > pipes[1].x &&
      flappy.x < pipes[1].x + pipes[1].width &&
      (flappy.y + flappy.height > pipes[1].y &&
        flappy.y + flappy.height < pipes[1].y + pipes[1].height))
  ) {
    score = 0;
    canGetPoint = false;
  }

  //CHECK POINT
  if (flappy.x + flappy.width > pipes[0].x + pipes[0].width && canGetPoint) {
    canGetPoint = false;
    score++;
  }

  //Reset canGetPoint to get new Point
  if (pipes[0].x <= -79) {
    canGetPoint = true;
  }

  //Check bot layer to dead
  if (flappy.y + flappy.height > window.innerHeight) {
    score = 0;
  }

  gameContext.flappy = flappy;
  gameContext.pipes = pipes;
  gameContext.score = score;
  gameContext.canGetPoint = canGetPoint;
}
function refresh({ ctx }) {
  ctx.fillStyle = "rgb(106, 212, 226)";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  //ctx.drawImage(spriteFlappy, 100, 100, 100, 100, 0, 0, 100, 100);
  return arguments;
}

function update(gameContext) {
  refresh(gameContext);
  draw(gameContext);
  control(gameContext);
}

export { update, keyDown };
