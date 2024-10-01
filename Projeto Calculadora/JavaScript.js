function calculadoraValor(tipo, valor) {
	if (tipo === "acao") {
		if (valor === "c") {
			document.getElementById("Valor").value = ""
		}

		else if (valor === "=") {
			let valor_final = eval(document.getElementById("Valor").value)
			document.getElementById("Valor").value = valor_final
		}

		else{
			document.getElementById("Valor").value += valor
		}
	} else if (tipo === "valor") {
		document.getElementById("Valor").value += valor
	}
}