type CartItem = {
  id: number;
  price: number;
};

type ShoppingCart = {
  cartItems: CartItem[];
};

const shoppingCart: ShoppingCart = {
  cartItems: [
    { id: 1000, price: 200 },
    { id: 2000, price: 400 },
    { id: 3000, price: 600 },
  ],
};

function calculateTotal(shoppingCart: ShoppingCart): void {
  const total: number = shoppingCart.cartItems.reduce(
    (actual, item) => (actual += item.price),
    0
  );
  console.log(`Total do Carrinho: R$${total.toFixed(2)}`);
}

calculateTotal(shoppingCart);
