"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuList = exports.MenuItem = void 0;
class MenuItem {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
        this.parent = undefined;
    }
    showMenu(indent = "") {
        console.log(indent + this.name);
    }
    detach() {
        if (this.parent) {
            this.parent.delete(this);
        }
    }
}
exports.MenuItem = MenuItem;
class MenuList {
    constructor(name) {
        this.cost = 0;
        this.name = name;
        this.components = [];
    }
    showMenu(indent = "") {
        console.log(`${indent}${this.name}`);
        this.components.forEach((component) => {
            component.showMenu(indent + "___");
        });
    }
    attach(component) {
        component.detach();
        component.parent = this;
        this.components.push(component);
    }
    delete(component) {
        const index = this.components.indexOf(component);
        if (index > -1) {
            this.components.splice(index, 1);
        }
    }
    detach() {
        if (this.parent) {
            this.parent.delete(this);
            this.parent = undefined;
        }
    }
}
exports.MenuList = MenuList;
