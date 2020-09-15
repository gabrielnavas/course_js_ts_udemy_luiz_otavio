import ItemCart from './interfaces/IItemCart';

export default class Product implements ItemCart {

    constructor(
        public name: string,
        public price: number,
    ) { }

}