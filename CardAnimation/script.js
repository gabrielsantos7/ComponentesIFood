const divRotate = document.getElementById("div-view-more");
const imgRotate = document.getElementById("img-view-more");
let spanMore = document.getElementById("span-more");
let captionMore = document.getElementById("caption-more");

divRotate.addEventListener("click", function () {
  if (imgRotate.classList.contains("rotate")) {
    imgRotate.classList.remove("rotate");
    spanMore.innerText = "Mais";
    captionMore.innerText = "Mostrar mais opções";
  } else {
    imgRotate.classList.add("rotate");
    spanMore.innerText = "Menos";
    captionMore.innerText = "Mostrar menos opções";
  }
});
