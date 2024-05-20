"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkedListIterator = exports.hashMapIterator = exports.arrayIterator = void 0;
const iterators_1 = require("./iterators");
const linked_list_1 = require("./dataStructure/linked-list");
exports.arrayIterator = new iterators_1.ArrayIterator(["Pizza1", "Pizza2", "Pizza3"]);
exports.hashMapIterator = new iterators_1.HashMapIterator({
    PelmenSet1: "1",
    PelmenSet2: "2",
    PelmenSet3: "3",
});
const linkedList = new linked_list_1.LinkedList();
linkedList.append("CoffeeDrink1");
linkedList.append("CoffeeDrink2");
linkedList.append("CoffeeDrink3");
exports.linkedListIterator = new iterators_1.LinkedListIterator(linkedList.getHead());
