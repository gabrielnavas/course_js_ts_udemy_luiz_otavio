import Order from './classes/order';
import PersistencyCart from './services/persistency-cart';
import Product from './classes/product';
import SendMessage from './services/send-message';
import ShoppingCart from './classes/shopping-cart';
import {
    FiftyPercentDiscount,
    TenPercentDiscount,
    ZeroPercentDiscount
} from './classes/discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const zeroPercentDiscount = new ZeroPercentDiscount();

const shopCart = new ShoppingCart(zeroPercentDiscount);
const sendMessage = new SendMessage();
const persistencyCart = new PersistencyCart();
const order = new Order(shopCart, sendMessage, persistencyCart);

shopCart.addItem(new Product('caneta', 55.4213213));
shopCart.addItem(new Product('lápis', 75.45125));
shopCart.addItem(new Product('mesa', 25.4213213));

const items = shopCart.items;
console.log(items);

const totalPurchased = shopCart.totalPurchased();
console.log(totalPurchased);

order.checkout();

