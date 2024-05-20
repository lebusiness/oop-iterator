"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_readline_1 = __importDefault(require("node:readline"));
const menu_1 = require("./menu/menu");
const iterator_1 = require("./iterator/iterator");
const rootMenu = new menu_1.MenuList("Меню");
const pizzas = new menu_1.MenuList("Пиццерия");
const pizza1 = new menu_1.MenuItem("Пицца1", 2);
const pizza2 = new menu_1.MenuItem("Пицца2", 5);
const pizza3 = new menu_1.MenuItem("Пицца3", 10);
pizzas.attach(pizza1);
pizzas.attach(pizza2);
pizzas.attach(pizza3);
const coffee = new menu_1.MenuList("Кофейня");
const latte = new menu_1.MenuItem("Раф", 22);
const americano = new menu_1.MenuItem("Кофе", 12);
coffee.attach(latte);
coffee.attach(americano);
const coffee_desert = new menu_1.MenuList("Десерты");
const sertaki = new menu_1.MenuItem("Мороженное", 3);
const medovik = new menu_1.MenuItem("Торт", 8);
coffee_desert.attach(sertaki);
coffee_desert.attach(medovik);
coffee.attach(coffee_desert);
const dumplings = new menu_1.MenuList("Пельменная");
const dumpling_1 = new menu_1.MenuItem("Пельмени сметана", 1);
const dumpling_2 = new menu_1.MenuItem("Пельмени кетчуп", 9);
dumplings.attach(dumpling_1);
dumplings.attach(dumpling_2);
const dumplings_wine = new menu_1.MenuList("Винная карта");
const wine1 = new menu_1.MenuItem("Вино1", 10);
const wine2 = new menu_1.MenuItem("Вино2", 21);
const wine3 = new menu_1.MenuItem("Вино3", 9);
dumplings_wine.attach(wine1);
dumplings_wine.attach(wine2);
dumplings_wine.attach(wine3);
dumplings.attach(dumplings_wine);
rootMenu.attach(pizzas);
rootMenu.attach(coffee);
rootMenu.attach(dumplings);
node_readline_1.default.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
const waitForKeypress = () => new Promise((resolve) => {
    process.stdin.on("keypress", (_, key) => {
        if (key.ctrl === true && key.name === "d") {
            process.exit(0);
        }
        resolve(key);
    });
});
const basket = [];
async function main() {
    let menuListIterator = new iterator_1.MenuListIterator(rootMenu);
    while (true) {
        rootMenu.showMenu();
        if (!menuListIterator.hasNext()) {
            menuListIterator = new iterator_1.MenuListIterator(rootMenu);
        }
        const val = menuListIterator.next();
        console.log(`Выбрано: ${basket.map((v) => v.name).join(", ")}`);
        console.log("Нажмите 'Enter' для добавления в корзину. Нажмите клавишу для смены товара");
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
