"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuListIterator = void 0;
const menu_1 = require("../menu/menu");
class MenuListIterator {
    constructor(rootMenuList) {
        this.parentStack = [];
        this.parentStack.push({ root: rootMenuList, position: -1 });
    }
    next() {
        const { position, root } = this.parentStack.pop() ?? {};
        if (typeof position === "undefined" || typeof root === "undefined") {
            throw new Error("Iterator was stopped");
        }
        const nextPosition = position + 1;
        const nextElement = root.components[nextPosition];
        const alreadyOpenAllRoot = !nextElement;
        if (alreadyOpenAllRoot) {
            return this.next();
        }
        const goToNexNodeAndRememberThisMenu = nextElement instanceof menu_1.MenuList;
        if (goToNexNodeAndRememberThisMenu) {
            this.parentStack.push({ root: root, position: nextPosition });
            this.parentStack.push({ root: nextElement, position: -1 });
            return this.next();
        }
        this.parentStack.push({ root, position: nextPosition });
        return nextElement;
    }
    hasNext() {
        return (this.parentStack.length !== 0 &&
            this.parentStack.some((stackVal) => stackVal.position < stackVal.root.components.length - 1));
    }
}
exports.MenuListIterator = MenuListIterator;
