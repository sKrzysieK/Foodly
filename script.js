const overlay = document.querySelector("#overlay");
const sideNav = document.querySelector("#sideNav");

const openNav = () => {
  console.log("open");
  sideNav.style.display = "flex";
  overlay.style.display = "block";
};

const closeNav = () => {
  console.log("close");
  sideNav.style.display = "none";
  overlay.style.display = "none";
};

overlay.addEventListener("click", () => {
  closeNav();
});
