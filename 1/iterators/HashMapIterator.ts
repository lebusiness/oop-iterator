import { Iterator } from "./iterator";

export class HashMapIterator implements Iterator<string> {
  private flatHashMap: string[] | null = null;
  private index = 0;

  constructor(private hashMap: Record<string, string>) {}

  public next() {
    const aggregates = this.getFlatHashMap();
    if (this.index >= aggregates.length) {
      throw new Error("End of iterator");
    }

    return aggregates[this.index++];
  }

  public hasNext() {
    const aggregates = this.getFlatHashMap();

    return this.index < aggregates.length;
  }

  private getFlatHashMap(): string[] {
    if (this.flatHashMap) {
      return this.flatHashMap;
    }

    this.flatHashMap = Object.keys(this.hashMap).sort();
    return this.flatHashMap;
  }

  public deleteLast() {
    const aggregates = this.getFlatHashMap();
    if (!aggregates[this.index - 1]) {
      throw new Error("delete error");
    }
    //@ts-ignore
    this.flatHashMap.splice(--this.index, 1);
    this.index--;
  }
}
