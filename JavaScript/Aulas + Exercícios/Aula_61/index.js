const request = (obj) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "Olá.txt", true);
  xhr.send();

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      obj.success(xhr.responseText);
    } else {
      obj.error(xhr.status, xhr.statusText);
    }
  });
};

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "button") {
    e.preventDefault();
    carregaPagina();
  }
});

function carregaPagina() {
  request({
    success(response) {
      carregaResultado(response);
    },

    error(errorText) {
      console.log(errorText);
    },
  });
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
