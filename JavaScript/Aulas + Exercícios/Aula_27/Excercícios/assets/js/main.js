divParagrafos = document.querySelector(".paragrafos");
paragrafos = divParagrafos.querySelectorAll("p");

for (let i of paragrafos) {
  const corFundo = "rgb(17, 86, 102)";
  i.style.backgroundColor = corFundo;
  i.style.color = "rgb(255, 255, 255)";
}
