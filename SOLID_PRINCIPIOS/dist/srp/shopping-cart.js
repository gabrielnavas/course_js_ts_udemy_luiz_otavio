"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor() {
        this._items = [];
    }
    addItem(item) {
        this._items.push(item);
    }
    removeItem(index) {
        this._items.splice(index, 1);
    }
}
exports.ShoppingCart = ShoppingCart;
//# sourceMappingURL=shopping-cart.js.map