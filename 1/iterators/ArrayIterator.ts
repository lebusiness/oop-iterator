import { Iterator } from "./iterator";

export class ArrayIterator<T> implements Iterator<T> {
  private index: number;
  private aggregates: T[];

  constructor(aggregates: T[]) {
    this.aggregates = aggregates;
    this.index = 0;
  }

  public next() {
    if (this.index >= this.aggregates.length) {
      throw new Error("End of iterator");
    }

    return this.aggregates[this.index++];
  }

  public hasNext() {
    return this.index < this.aggregates.length;
  }

  public deleteLast() {
    if (!this.aggregates[this.index - 1]) {
      throw new Error("delete error");
    }
    this.aggregates.splice(--this.index, 1);
    this.index--;
  }
}
