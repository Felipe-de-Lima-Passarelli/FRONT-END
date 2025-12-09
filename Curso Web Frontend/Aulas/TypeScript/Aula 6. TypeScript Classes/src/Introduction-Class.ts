class Product {
  name: string = "Smartphone";
  price: number = 2000;

  showDetails(): void {
    console.log(`${this.name}: ${this.price}`);
  }
}

const product = new Product();

product.showDetails();
console.log(`Atributo público: ${product.name}`);
