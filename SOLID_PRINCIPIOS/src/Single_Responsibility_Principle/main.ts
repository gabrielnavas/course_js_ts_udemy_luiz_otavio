import Order from './entities/Order';
import PersistencyCart from './services/PersistencyCart';
import Product from './entities/Product';
import SendMessage from './services/SendMessage';
import ShoppingCart from './entities/ShoppingCart';

const shopCart = new ShoppingCart();
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