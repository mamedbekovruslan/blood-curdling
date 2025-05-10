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

document.addEventListener("keydown", (event) => {
  const available = {
    top: y,
    bottom: gameContainer.clientHeight - player.clientHeight - y,
    left: x,
    right: gameContainer.clientWidth - player.clientWidth - x,
  };

  switch (event.key) {
    case "ArrowUp":
      if (available.top > 0) {
        const move = Math.min(speed, available.top);
        y -= move;
        player.style.top = `${y}px`;
      }
      break;

    case "ArrowDown":
      if (available.bottom > 0) {
        const move = Math.min(speed, available.bottom);
        y += move;
        player.style.top = `${y}px`;
      }
      break;

    case "ArrowLeft":
      if (available.left > 0) {
        const move = Math.min(speed, available.left);
        x -= move;
        player.style.left = `${x}px`;
      }
      break;

    case "ArrowRight":
      if (available.right > 0) {
        const move = Math.min(speed, available.right);
        x += move;
        player.style.left = `${x}px`;
      }
      break;

    default:
      return;
  }

  event.preventDefault();
});
