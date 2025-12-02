//Cripto Coins
const coins = [
  "btc-bitcoin",
  "eth-ethereum",
  "usdt-tether",
  "bnb-binance-coin",
  "sol-solana",
  "xrp-xrp",
  "ada-cardano",
  "doge-dogecoin",
  "ton-toncoin",
  "avax-avalanche",
];

let position = 0;

//Coin Image
const coinImage = document.getElementsByClassName("img_coin");

//Coin Name
const coinName = document.getElementsByClassName("card-title");

//Sigla Coin
const siglaCoin = document.getElementsByClassName("card-symbol");

//Coin Variation
const coinVariation = document.getElementsByClassName("card-variation");

//Coin Price
const coinPrice = document.getElementsByClassName("card-price");

async function fetchCoin(id, position) {
  const proxy = "https://api.codetabs.com/v1/proxy?quest=";
  const url = `https://api.coinpaprika.com/v1/tickers/${id}`;
  const request = await fetch(proxy + encodeURIComponent(url));
  const data = await request.json();

  coinImage[
    position
  ].src = `https://cryptologos.cc/logos/${data.name.toLowerCase()}-${data.symbol.toLowerCase()}-logo.png?v=002`;
  coinImage[position].alt = data.name;
  coinName[position].innerHTML = data.name;
  siglaCoin[position].innerHTML = data.symbol;

  coinVariation[position].innerHTML = `${data.quotes.USD.percent_change_24h} %`;

  if (data.quotes.USD.percent_change_24h > 0) {
    coinVariation[position].classList.add("up");
  } else {
    coinVariation[position].classList.add("down");
  }

  coinPrice[position].innerHTML = `$ ${data.quotes.USD.price.toFixed(2)}`;
}

for (const item of coins) {
  const data = fetchCoin(item, position);
  position++;
}
