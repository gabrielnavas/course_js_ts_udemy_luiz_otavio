import ItemCart from '../classes/interfaces/item-cart';

export default class PersistencyCart {

    saveOrder(itemsCart: Readonly<ItemCart[]>): void {
        itemsCart.forEach((itemCart: ItemCart) => console.log(`${itemCart.name} saved`));
    }
    
}