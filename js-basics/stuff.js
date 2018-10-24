//test foreach

const sir = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sir.forEach((post, index) => {
  // console.log(post);
  // console.log(index);
  // console.log("-------");
});

const promise1 = Promise.resolve("hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "goodbye")
);

// Promise.all([promise1, promise2, promise3]).then(values =>
//   setTimeout(console.log(values))
// );
async function fetchAsync() {
  const promise4 = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(promise4.json());
}
fetchAsync();
