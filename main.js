const gameContainer = document.querySelector(".game-container");

const speed = 10;

let x = 0;
let y = 0;

const player = document.createElement("div");

player.className = "player-object";
player.style.width = "86px";
player.style.height = "86px";
player.style.backgroundColor = "#00a1ff73";
player.style.position = "relative";

gameContainer.append(player);

// Объект для отслеживания нажатых клавиш
const keysPressed = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};

// Обработчики нажатия и отпускания клавиш
document.addEventListener("keydown", (event) => {
  if (keysPressed.hasOwnProperty(event.key)) {
    keysPressed[event.key] = true;
    event.preventDefault();
  }
});

document.addEventListener("keyup", (event) => {
  if (keysPressed.hasOwnProperty(event.key)) {
    keysPressed[event.key] = false;
    event.preventDefault();
  }
});

// Функция движения, вызываемая регулярно
function updatePosition() {
  // Рассчитываем оставшееся расстояние до границ
  const remaining = {
    top: y,
    bottom: gameContainer.clientHeight - player.clientHeight - y,
    left: x,
    right: gameContainer.clientWidth - player.clientWidth - x,
  };

  let moveX = 0;
  let moveY = 0;

  // Проверяем все нажатые клавиши
  if (keysPressed.ArrowUp && remaining.top > 0) {
    moveY = -Math.min(speed, remaining.top);
  }
  if (keysPressed.ArrowDown && remaining.bottom > 0) {
    moveY = Math.min(speed, remaining.bottom);
  }
  if (keysPressed.ArrowLeft && remaining.left > 0) {
    moveX = -Math.min(speed, remaining.left);
  }
  if (keysPressed.ArrowRight && remaining.right > 0) {
    moveX = Math.min(speed, remaining.right);
  }

  // Нормализуем диагональное движение (чтобы скорость по диагонали не была больше)
  if (moveX !== 0 && moveY !== 0) {
    const diagonalSpeed = speed / Math.sqrt(2); // ~7.07 при speed=10
    moveX = moveX > 0 ? diagonalSpeed : -diagonalSpeed;
    moveY = moveY > 0 ? diagonalSpeed : -diagonalSpeed;
  }

  // Применяем движение
  x += moveX;
  y += moveY;
  player.style.left = `${x}px`;
  player.style.top = `${y}px`;

  // Запрашиваем следующий кадр анимации
  requestAnimationFrame(updatePosition);
}

// Запускаем игровой цикл
updatePosition();
