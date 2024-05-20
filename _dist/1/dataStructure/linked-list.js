"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.ListNode = void 0;
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
exports.ListNode = ListNode;
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    getHead() {
        if (!this.head) {
            throw new Error("no head");
        }
        return this.head;
    }
}
exports.LinkedList = LinkedList;
