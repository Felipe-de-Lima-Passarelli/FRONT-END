let tabuada = document.getElementById("Numero")
let resultado = document.querySelector(".Resultado")

function calcularTabuada() {
    let i = 1
    resultado.innerHTML = `Tabuada será gerada aqui...`
    while (i < 11){
    resultado.innerHTML += `<br>${tabuada.value} x ${i} = ` + tabuada.value*i
    i++
    }
}