import { addItem, exportLowerCasedCSV } from "./shopping.js";
import { nanoid } from 'nanoid'
import dayjs from 'dayjs'

let form = document.querySelector("#shopping-list-form");
let itemName = document.querySelector("#item-name");
let list = document.querySelector("#shopping-list");
const exportedJson = document.querySelector("#exported-json");


let items = [];

function render(items) {
  console.log("Items: " + items.join(", "));
  list.innerHTML = "";
  items.forEach(function (item) {
    

    list.insertAdjacentHTML(
      "beforeend",
      `<li><div id="${item.id}" class="card  ${item.priority}">${item.date} ${item.value}</div></li>`
    );
  });
  exportedJson.textContent = exportLowerCasedCSV(items);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const priority = document.querySelector("input[name='priority']:checked")
  const newItem = {
    id: nanoid(),
    date: dayjs().format("DD-MM-YYYY HH:mm:ss"),
    priority: priority.value,
    value: itemName.value
  };

   items =  addItem(items, newItem);
  itemName.value = "";
  render(items);
});

render(items);
