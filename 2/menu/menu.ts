export interface Compositable {
  name: string;
  parent?: MenuList;
  cost: number;
  showMenu(indent?: string): void;
  detach(): void;
}

export class MenuItem implements Compositable {
  parent?: MenuList = undefined;
  constructor(public name: string, public cost: number) {}

  public showMenu(indent: string = ""): void {
    console.log(indent + this.name);
  }

  public detach(): void {
    if (this.parent) {
      this.parent.delete(this);
    }
  }
}

export class MenuList implements Compositable {
  parent?: MenuList;
  components: Compositable[];
  name: string;
  cost = 0;

  constructor(name: string) {
    this.name = name;
    this.components = [];
  }

  public showMenu(indent = ""): void {
    console.log(`${indent}${this.name}`);
    this.components.forEach((component) => {
      component.showMenu(indent + "___");
    });
  }

  public attach(component: Compositable): void {
    component.detach();
    component.parent = this;
    this.components.push(component);
  }

  public delete(component: Compositable): void {
    const index = this.components.indexOf(component);
    if (index > -1) {
      this.components.splice(index, 1);
    }
  }

  public detach(): void {
    if (this.parent) {
      this.parent.delete(this);
      this.parent = undefined;
    }
  }
}
