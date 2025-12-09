type Address = {
  cep: string;
  default: boolean;
};

type Customer = {
  addresses: Address[];
};

const addresses: Address[] = [
  { cep: "00000-000", default: false },
  { cep: "00000-001", default: true },
  { cep: "00000-002", default: false },
];

const customer: Customer = {
  addresses: addresses,
};

function getPrincipalAddress(customer: Customer): Address | undefined {
  return customer.addresses.find((addresses) => addresses.default);
}

const principalAddress = getPrincipalAddress(customer);
if (principalAddress !== undefined) {
  console.log(principalAddress);
}

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

function calculateTotal(shoppingCart: ShoppingCart): number {
  const total: number = shoppingCart.cartItems.reduce(
    (actual, item) => (actual += item.price),
    0
  );
  return total;
}

const total = calculateTotal(shoppingCart);
console.log(`Total do Carrinho: R$${total.toFixed(2)}`);
