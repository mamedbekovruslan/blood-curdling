const gameContainer = document.querySelector(".game-container");

const step = 10;
let x = 0;
let y = 0;

const player = document.createElement("div");
player.className = "player-object";
player.style.width = "50px";
player.style.height = "50px";
player.style.backgroundColor = "#00a1ff73";
player.style.position = "relative";

gameContainer.append(player);

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      y -= step;
      player.style.top = `${y}px`;
      break;
    case "ArrowDown":
      y += step;
      player.style.top = `${y}px`;
      break;
    case "ArrowLeft":
      x -= step;
      console.log(x);
      player.style.left = `${x}px`;
      break;
    case "ArrowRight":
      x += step;
      console.log(x);
      player.style.left = `${x}px`;
      break;

    default:
      return;
  }

  event.preventDefault();
});
