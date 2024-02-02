import { addItem, exportLowerCasedCSV } from "../src/js/shopping.js";

describe("addItem", () => {
	it("should add the item to the array and return the updated array", () => {
		const items = ["apple", "banana"];
		const item = "mango";
		const result = addItem(items, item);
		expect(result).toEqual(["apple", "banana", "mango"]);
	});
});

describe("exportLowerCasedCSV", () => {
	it("should convert all items in the array to lower case and return a CSV string", () => {
		const items = ["apple", "Banana", "MANGO"];
		const result = exportLowerCasedCSV(items);
		expect(result).toBe("apple, banana, mango");
	});
});





