"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayIterator = void 0;
class ArrayIterator {
    constructor(aggregates) {
        this.aggregates = aggregates;
        this.index = 0;
    }
    next() {
        if (this.index >= this.aggregates.length) {
            throw new Error("End of iterator");
        }
        return this.aggregates[this.index++];
    }
    hasNext() {
        return this.index < this.aggregates.length;
    }
    deleteLast() {
        if (!this.aggregates[this.index - 1]) {
            throw new Error("delete error");
        }
        this.aggregates.splice(--this.index, 1);
        this.index--;
    }
}
exports.ArrayIterator = ArrayIterator;
