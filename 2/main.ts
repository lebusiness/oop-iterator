import readline from "node:readline";
import { MenuItem, MenuList } from "./menu/menu";
import { MenuListIterator } from "./iterator/iterator";

const rootMenu = new MenuList("Меню");

const pizzas = new MenuList("Пиццерия");
const pizza1 = new MenuItem("Пицца1", 2);
const pizza2 = new MenuItem("Пицца2", 5);
const pizza3 = new MenuItem("Пицца3", 10);

pizzas.attach(pizza1);
pizzas.attach(pizza2);
pizzas.attach(pizza3);

const coffee = new MenuList("Кофейня");
const latte = new MenuItem("Раф", 22);
const americano = new MenuItem("Кофе", 12);

coffee.attach(latte);
coffee.attach(americano);

const coffee_desert = new MenuList("Десерты");
const sertaki = new MenuItem("Мороженное", 3);
const medovik = new MenuItem("Торт", 8);

coffee_desert.attach(sertaki);
coffee_desert.attach(medovik);
coffee.attach(coffee_desert);

const dumplings = new MenuList("Пельменная");
const dumpling_1 = new MenuItem("Пельмени сметана", 1);
const dumpling_2 = new MenuItem("Пельмени кетчуп", 9);

dumplings.attach(dumpling_1);
dumplings.attach(dumpling_2);

const dumplings_wine = new MenuList("Винная карта");
const wine1 = new MenuItem("Вино1", 10);
const wine2 = new MenuItem("Вино2", 21);
const wine3 = new MenuItem("Вино3", 9);

dumplings_wine.attach(wine1);
dumplings_wine.attach(wine2);
dumplings_wine.attach(wine3);

dumplings.attach(dumplings_wine);

rootMenu.attach(pizzas);
rootMenu.attach(coffee);
rootMenu.attach(dumplings);

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const waitForKeypress = () =>
  new Promise<{ name: string }>((resolve) => {
    process.stdin.on("keypress", (_, key) => {
      if (key.ctrl === true && key.name === "d") {
        process.exit(0);
      }

      resolve(key);
    });
  });

const basket: MenuItem[] = [];

async function main() {
  let menuListIterator = new MenuListIterator(rootMenu);
  while (true) {
    rootMenu.showMenu();

    if (!menuListIterator.hasNext()) {
      menuListIterator = new MenuListIterator(rootMenu);
    }

    const val = menuListIterator.next();

    console.log(`Выбрано: ${basket.map((v) => v.name).join(", ")}`);

    console.log(
      "Нажмите 'Enter' для добавления в корзину. Нажмите клавишу для смены товара"
    );
    console.log(`Сейчас выберется: ${val.name}`);

    const key = await waitForKeypress();

    if (key.name === "space") {
      basket.push(val);
    }

    if (key.name === "return") {
      console.log(`Ваш заказ: ${basket.map((v) => v.name).join(", ")}`);
      console.log(`Общая цена: ${basket.reduce((acc, v) => v.cost + acc, 0)}`);

      process.exit();
    }
  }
}

main();
