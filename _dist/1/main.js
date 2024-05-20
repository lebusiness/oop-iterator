"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isntances_1 = require("./isntances");
class MenuShower {
    constructor(menuLists) {
        this.menuLists = menuLists;
    }
    show() {
        for (const menuList of this.menuLists) {
            while (menuList.hasNext()) {
                const el = menuList.next();
                console.log(el);
            }
        }
    }
}
const menuShower = new MenuShower([
    isntances_1.arrayIterator,
    isntances_1.hashMapIterator,
    isntances_1.linkedListIterator,
]);
menuShower.show();
