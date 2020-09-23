import ItemCart from './interfaces/item-cart';

export default class Product implements ItemCart {

    constructor(
        public name: string,
        public price: number,
    ) { }

}