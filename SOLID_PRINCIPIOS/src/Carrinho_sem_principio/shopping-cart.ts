type ItemCart = { name: string, price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
    private readonly _items: ItemCart[] = [];
    private _orderStatus: OrderStatus = 'open';

    addItem(itemcart: ItemCart): void {
        this._items.push(itemcart);
    }

    removeItem(index: number): ItemCart {
        if (index < this._items.length) throw 'index is smaller than length of cart items.';

        const item = this._items[index];
        this._items.splice(index, 1);
        return item;
    }

    totalPurchased(): number {
        const itemSumFunction = (total: number, { price }: ItemCart) => total + price;
        const total = this._items.reduce(itemSumFunction, 0);

        const totalFixed2Decimal = Number(total.toFixed(2));
        return totalFixed2Decimal;
    }

    checkout(): void {
        if (this.isEmpty()) throw 'Cart is empty.';

        this._orderStatus = 'closed';
        this.sendMessage(`Seu pedido com total de ${this.totalPurchased()} está sendo processado.`);
        this.saveOrder();
        this.clearCart();
    }

    sendMessage(message: string): void {
        console.log(message);
    }

    saveOrder(): void {
        console.log('Order saved');
    }

    clearCart(): void {
        this._items.length = 0;
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    get items(): Readonly<ItemCart[]> {
        return this._items;
    }

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }
}

const shopCart = new ShoppingCart();
shopCart.addItem({ name: 'caneta', price: 55.4213213 });
shopCart.addItem({ name: 'jaqueta', price: 75.45125 });
shopCart.addItem({ name: 'mesa', price: 25.4213213 });

const items = shopCart.items;
console.log(items);

const totalPurchased = shopCart.totalPurchased();
console.log(totalPurchased);

shopCart.checkout();
shopCart.clearCart();