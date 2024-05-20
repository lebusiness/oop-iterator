"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashMapIterator = void 0;
class HashMapIterator {
    constructor(hashMap) {
        this.hashMap = hashMap;
        this.flatHashMap = null;
        this.index = 0;
    }
    next() {
        const aggregates = this.getFlatHashMap();
        if (this.index >= aggregates.length) {
            throw new Error("End of iterator");
        }
        return aggregates[this.index++];
    }
    hasNext() {
        const aggregates = this.getFlatHashMap();
        return this.index < aggregates.length;
    }
    getFlatHashMap() {
        if (this.flatHashMap) {
            return this.flatHashMap;
        }
        this.flatHashMap = Object.keys(this.hashMap).sort();
        return this.flatHashMap;
    }
    deleteLast() {
        const aggregates = this.getFlatHashMap();
        if (!aggregates[this.index - 1]) {
            throw new Error("delete error");
        }
        //@ts-ignore
        this.flatHashMap.splice(--this.index, 1);
        this.index--;
    }
}
exports.HashMapIterator = HashMapIterator;
