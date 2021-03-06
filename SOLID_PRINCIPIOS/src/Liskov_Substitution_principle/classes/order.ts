import OrderStatus from './interfaces/order-status'
import PersistenceCart from '../services/persistency-cart'
import SendMessage from '../services/send-message'
import ShoppingCart from './shopping-cart'

export default class Order {
    private _orderStatus: OrderStatus = 'open'

    constructor(
        private readonly _shopCart: ShoppingCart,
        private readonly _sendMessage: SendMessage,
        private readonly _persistencyCart: PersistenceCart
    ) { } 

    checkout(): void {
        if (this._shopCart.isEmpty()) throw 'Cart is empty.'

        this._orderStatus = 'closed'
        this._sendMessage.send(`Seu pedido com total de ${this._shopCart.totalWithDiscont()} está sendo processado.`)
        this._persistencyCart.saveOrder(this._shopCart.items)
        this._shopCart.clearCart()
    }

    get orderStatus(): OrderStatus {
        return this._orderStatus
    }
}