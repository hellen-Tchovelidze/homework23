let arr = [2, 4, 6, 8, 35, 98];

let result = arr.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(result);

let maxnum = [3, 5, 8, 7, 2, 18, 87, 11, 45];

let findmax = maxnum.reduce((acc, cur) => {
  return cur > acc ? cur : acc;
}, 0);

console.log(findmax);

let words = ["apple", "banana", "cherry", "date", "elderberry"];

console.log(words.toString());

let numbers = [3, 6, 4, 9, 10, 27];

let multiplication = numbers.reduce((acc, cur) => {
  return acc * cur;
}, 1);

console.log(multiplication);

let num = [34, 19, 23, 4, 9, 10];

let subtraction = num.reduce((acc, cur) => {
  return acc - cur;
}, 0);

console.log(subtraction);

let numbersarr = [32, 5, 99, 7];

let multiplicationX = numbersarr.map((index) => {
  return index * 2;
});

console.log(multiplicationX);

let animals = ["LION", "TIGER", "ELEPHANT", "GIRAFFE", "ZEBRA"];

let animalslist = animals.map((index) => {
  return index.toLowerCase();
});

console.log(animalslist);

let text = ["okay", "good", "document"];

text.map((index) => {
  let p = document.createElement("p");
  p.textContent = index + " boy";
  document.body.appendChild(p);
});

let array = [3, 7, 4, 22];

let changearray = array.map((index) => {
  return index * index;
});

console.log(changearray);

let stringtex = ["cool", "happy", "script"];

stringtex.forEach((index) => {
  let p = document.createElement("p");
  p.textContent = index + " party";
  document.body.appendChild(p);
});

let students = [
  { name: "John", score: 80 },
  { name: "Alice", score: 90 },
  { name: "Bob", score: 75 },
  { name: "Emily", score: 85 },
];

students.forEach((index) => {
  index.score += 5;
});

console.log(students);

let arraynum = [3, 8, 9, 54];

for (let index = 3; index >= 0; index--) {
  console.log(arraynum[index]);
}

let items = ["first", "Second", "Third"];

for (let index = 0; index < items.length; index++) {
  let div = document.createElement("div");
  div.textContent = items[index];
  document.body.appendChild(div);
}

let tabnum = [2, 5, 7];

for (let i = 0; i < tabnum.length; i++) {
  console.log(`${tabnum[i]}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${tabnum[i]} x ${j} = ${tabnum[i] * j}`);
  }
}

let charges = [3, 6, 12, 46, 26, 64];

let changecharges = charges.filter((index) => {
  return index > 10;
});

console.log(changecharges);

let divs = [];
for (let i = 0; i < 5; i++) {
  let div = document.createElement("div");
  div.textContent = "divebi";
  document.body.appendChild(div);
  divs.push(div);
}

divs[0].classList.add("first");
divs[1].classList.add("blue");
divs[2].classList.add("first");
divs[3].classList.add("green");
divs[4].classList.add("first");

let filteredDivs = divs.filter((div) => div.classList.contains("first"));
console.log(filteredDivs);
