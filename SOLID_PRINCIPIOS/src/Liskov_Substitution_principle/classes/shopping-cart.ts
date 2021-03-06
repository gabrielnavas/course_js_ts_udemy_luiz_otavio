import { Discount } from './discount';
import ItemCart from './interfaces/item-cart';

export default class ShoppingCart {
    private readonly _items: ItemCart[] = [];

    constructor(
        private readonly discount: Discount,
    ) { }

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

    totalWithDiscont(): number {
        const total = this.totalPurchased();
        const totalWithDiscount = this.discount.calculate(total);
        const totalWith2Decimal =  Number(totalWithDiscount.toFixed(2));
        return totalWith2Decimal;
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

}