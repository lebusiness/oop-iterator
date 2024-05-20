import { MenuItem, MenuList } from "../menu/menu";

export interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

export interface StackPosition {
  root: MenuList;
  position: number;
}

export class MenuListIterator implements Iterator<MenuItem> {
  private parentStack: StackPosition[] = [];

  constructor(rootMenuList: MenuList) {
    this.parentStack.push({ root: rootMenuList, position: -1 });
  }

  public next(): MenuItem {
    const { position, root } = this.parentStack.pop() ?? {};

    if (typeof position === "undefined" || typeof root === "undefined") {
      throw new Error("Iterator was stopped");
    }

    const nextPosition = position + 1;
    const nextElement = root.components[nextPosition];

    const alreadyOpenAllRoot = !nextElement;

    if (alreadyOpenAllRoot) {
      return this.next();
    }

    const goToNexNodeAndRememberThisMenu = nextElement instanceof MenuList;

    if (goToNexNodeAndRememberThisMenu) {
      this.parentStack.push({ root: root, position: nextPosition });
      this.parentStack.push({ root: nextElement, position: -1 });
      return this.next();
    }

    this.parentStack.push({ root, position: nextPosition });

    return nextElement;
  }

  public hasNext() {
    return (
      this.parentStack.length !== 0 &&
      this.parentStack.some(
        (stackVal) => stackVal.position < stackVal.root.components.length - 1
      )
    );
  }
}
