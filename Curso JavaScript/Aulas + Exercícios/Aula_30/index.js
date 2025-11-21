function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser números");
  }
  return x + y;
}

try {
  console.log(soma(1, 2)); //Tudo ok!
  console.log(soma("1", 2)); //Aqui vai ir para o bloco catch
} catch (error) {
  console.log(error);
} finally {
  console.log("Sempre passa por aqui");
}
