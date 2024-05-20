import {
  ArrayIterator,
  HashMapIterator,
  LinkedListIterator,
} from "./iterators";
import { LinkedList } from "./dataStructure/linked-list";

export const arrayIterator = new ArrayIterator(["Pizza1", "Pizza2", "Pizza3"]);
export const hashMapIterator = new HashMapIterator({
  PelmenSet1: "1",
  PelmenSet2: "2",
  PelmenSet3: "3",
});

const linkedList = new LinkedList<string>();
linkedList.append("CoffeeDrink1");
linkedList.append("CoffeeDrink2");
linkedList.append("CoffeeDrink3");

export const linkedListIterator = new LinkedListIterator(linkedList.getHead());
