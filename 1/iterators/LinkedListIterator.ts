import { ListNode } from "../dataStructure/linked-list";
import { Iterator } from "./iterator";

export class LinkedListIterator<T> implements Iterator<T> {
  private linkedListHead: ListNode<T>;
  private curListPointer: ListNode<T> | null = null;
  private lastPointer: ListNode<T> | null = null;

  constructor(linkedListHead: ListNode<T>) {
    this.linkedListHead = linkedListHead;
  }

  public next() {
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

  public hasNext() {
    return this.curListPointer?.next !== null;
  }

  public deleteLast() {
    //@ts-ignore
    this.lastPointer.next = this.curListPointer.next;
  }
}
