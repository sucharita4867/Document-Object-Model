const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("generated num:", num);
  if (num > 5) {
    resolve({ num: num });
  } else {
    reject({ err: "number is not available" });
  }
});
getData
  .then((data) => console.log("promis resolve data", data))
  .catch((err) => console.log(err));
