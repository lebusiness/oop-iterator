import {
  arrayIterator,
  hashMapIterator,
  linkedListIterator,
} from "./isntances";
import { Iterator } from "./iterators";

class MenuShower<T> {
  constructor(private menuLists: Iterator<T>[]) {}

  public show() {
    for (const menuList of this.menuLists) {
      while (menuList.hasNext()) {
        const el = menuList.next();
        console.log(el);
      }
    }
  }
}

const menuShower = new MenuShower([
  arrayIterator,
  hashMapIterator,
  linkedListIterator,
]);

menuShower.show();
