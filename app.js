const mainImg = document.querySelector(".main-card img");
const selectImgs = [...document.querySelectorAll(".item img")];

selectImgs.forEach((item) => {
  item.onclick = () => {
    mainImg.src = item.src;
    isClassName();
    item.classList.add("border");
  };
});

const isClassName = () => {
  selectImgs.forEach((item) => {
    item.classList.contains("border") && item.classList.remove("border");
  });
};
