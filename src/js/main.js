/**
 * Add two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns {number} The sum of the two numbers.
 */

const inputText = document.getElementById('txt');
const items = document.querySelectorAll('#list li');
const tab = [];
let index;
/*
 *
 *   refresh array
 *
 */
// function refreshArray() {
//   // clear array
//   tab.length = 0;
//   items = document.querySelectorAll('#list li');
//   // fill array
//   for (const item of items) {
//     tab.push(item.innerHTML);
//   }
// }


/*
 *
 *   adding words
 *
 */
// const addBtn = document.getElementById('add');
//
// function addLI() {
//   const listNode = document.getElementById('list');
//   const textNode = document.createTextNode(inputText.value);
//   const liNode = document.createElement('LI');
//   liNode.appendChild(textNode);
//   listNode.appendChild(liNode);
//
//   // add event to the new LI
//   function clickingAdd() {
//     index = tab.indexOf(liNode.innerHTML);
//     // console.log(`${liNode.innerHTML} INDEX = ${index}`);
//     // set the selected li value into input text
//     inputText.value = liNode.innerHTML;
//   }
//
//   liNode.onclick = clickingAdd;
//   refreshArray();
//   makeWall();
// }
//
// addBtn.onclick = addLI;
//
// const editBtn = document.getElementById('edit');
/*
 *
 *   edit words
 *
 */
// function editLI() {
//   // edit the selected li using input text
//   items[index].innerHTML = inputText.value;
//   refreshArray();
//   makeWall();
// }

// editBtn.onclick = editLI;
//
// const deleteBtn = document.getElementById('delete');

/*
 *
 *   delete words
 *
 */

// function deleteLI() {
//   if (items.length > 0) {
//     items[index].parentNode.removeChild(items[index]);
//     inputText.value = '';
//   }
//   refreshArray();
//   makeWall();
// }
//
// deleteBtn.onclick = deleteLI;

// get the selected li index using array
// populate array with li values
// for (let i = 0; i < items.length; i += 1) {
//   tab.push(items[i].innerHTML);
// }

// get li index onclick
// for (let i = 0; i < items.length; i += 1) {
//   items[i].onclick = function () {
//     index = tab.indexOf(this.innerHTML);
//     // console.log(`${this.innerHTML} INDEX = ${index}`);
//     // set the selected li value into input text
//     inputText.value = this.innerHTML;
//   };
// }
