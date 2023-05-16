let btnImg = document.getElementById("img-show");

btnImg.addEventListener("click", function () {
  let div = document.getElementById("produtos");
  if (div.style.display === "none") {
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
});
