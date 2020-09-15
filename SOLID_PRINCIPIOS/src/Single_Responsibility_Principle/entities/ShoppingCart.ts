import IItemCart from './interfaces/IItemCart';

export default class ShoppingCart {
    private readonly _items: IItemCart[] = [];

    addItem(itemcart: IItemCart): void {
        this._items.push(itemcart);
    }

    removeItem(index: number): IItemCart {
        if (index < this._items.length) throw 'index is smaller than length of cart items.';

        const item = this._items[index];
        this._items.splice(index, 1);
        return item;
    }

    totalPurchased(): number {
        const itemSumFunction = (total: number, { price }: IItemCart) => total + price;
        const total = this._items.reduce(itemSumFunction, 0);

        const totalFixed2Decimal = Number(total.toFixed(2));
        return totalFixed2Decimal;
    }

    clearCart(): void {
        this._items.length = 0;
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    get items(): Readonly<IItemCart[]> {
        return this._items;
    }

}