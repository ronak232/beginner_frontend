const listActive = document.querySelectorAll(".list li .link-item");
const activeItem = document.querySelector(".link-item");

listActive.forEach((item) => {
  console.log(item);
  item.addEventListener("click", (e) => {
    console.log("Active item", e.target);
    listActive.forEach((active) => {
      active.classList.remove("active");
    });
    item.classList.add("active");
  });
  return;
});
