import IOrderStatus from './interfaces/IOrderStatus';
import PersistenceCart from '../services/PersistencyCart';
import SendMessage from '../services/SendMessage';
import ShoppingCart from './ShoppingCart';

export default class Order {
    private _orderStatus: IOrderStatus = 'open';

    constructor(
        private readonly _shopCart: ShoppingCart,
        private readonly _sendMessage: SendMessage,
        private readonly _persistencyCart: PersistenceCart
    ) { } 

    checkout(): void {
        if (this._shopCart.isEmpty()) throw 'Cart is empty.';

        this._orderStatus = 'closed';
        this._sendMessage.send(`Seu pedido com total de ${this._shopCart.totalPurchased()} está sendo processado.`);
        this._persistencyCart.saveOrder(this._shopCart.items);
        this._shopCart.clearCart();
    }

    get orderStatus(): IOrderStatus {
        return this._orderStatus;
    }
}