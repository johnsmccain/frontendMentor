const toggler = document.querySelector(".share");
const overlay = document.querySelector(".overlay");
let truthy = true;
toggler.onclick = () => {
  truthy = !truthy;
  overlay.className = `${truthy ? "overlay" : "hide "}`;
};
