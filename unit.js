const answer = {
  1: "b",
  2: "a",
  3: "c",
  4: "a",
  5: "b",
};

const main = {
  1: "d",
  2: "a",
  3: "a",
  4: "a",
  5: "b",
};

console.log(Object.values(answer));

let count = 0;
let result = [];
for (let i = 0; i < Object.values(answer).length; i++) {
  if (Object.values(answer)[i] === Object.values(main)[i]) {
    count += 1;
  } else {
    const str = `Number ${i + 1} Failed!`;
    result.push(str);
  }
}
console.log(count);
console.log(result);
