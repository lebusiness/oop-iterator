"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListIterator = void 0;
class LinkedListIterator {
    constructor(linkedListHead) {
        this.curListPointer = null;
        this.lastPointer = null;
        this.linkedListHead = linkedListHead;
    }
    next() {
        if (!this.curListPointer) {
            this.curListPointer = this.linkedListHead;
            return this.curListPointer.data;
        }
        if (!this.curListPointer.next) {
            throw new Error("end");
        }
        this.lastPointer = this.curListPointer;
        this.curListPointer = this.curListPointer.next;
        return this.curListPointer.data;
    }
    hasNext() {
        return this.curListPointer?.next !== null;
    }
    deleteLast() {
        //@ts-ignore
        this.lastPointer.next = this.curListPointer.next;
    }
}
exports.LinkedListIterator = LinkedListIterator;
