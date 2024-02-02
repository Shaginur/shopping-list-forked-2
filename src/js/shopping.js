/**
 * Добавляет элемент в массив и возвращает обновленный массив.
 * @param {string[]} items - Массив элементов.
 * @param {string} item - Новый элемент для добавления.
 * @returns {string[]} - Обновленный массив элементов.
 */
export function addItem(items, item) {
  items.push(item)
  return items
}

/**
 * Экспортирует элементы массива в виде CSV строки в нижнем регистре.
 * @param {string[]} items - Массив элементов.
 * @returns {string} - CSV строка в нижнем регистре.
 */
export function exportLowerCasedCSV(items) {
  let rezult = []
  items.forEach(function ({value}) {
    rezult.push(value.toLowerCase())
  })
  return rezult.join(', ')
}

