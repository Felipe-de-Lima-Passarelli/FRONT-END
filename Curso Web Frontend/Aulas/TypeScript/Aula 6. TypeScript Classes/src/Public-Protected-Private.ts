class Product {
  public name: string;
  protected price: number;
  private stock: number;

  //Acesso na classe (Public, protected e private)
  constructor(name: string, price: number, stock: number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

class Eletronic extends Product {
  //Acesso na subclasse (Apenas public e protected)
  showDetails(): string {
    return `Detalhes: ${this.name} - ${this.price}`;
  }
}

//Acesso fora da classe (Apenas public)
const product = new Product("Smartphone", 4500, 10);

console.log(product.name);
