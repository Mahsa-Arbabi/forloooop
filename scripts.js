const arr = [1, 2, 5, 7, 10];
for (let i = 0; i < arr.length; i++) {
  for (let j = 1; j <= i; j++) {
    if (arr[i] + arr[j] === 9) {
        console.log("truuuuuuue");
        let b = arr.indexOf(arr[i]);
        let c = arr.indexOf(arr[j]);

      console.log("["+b +","+ c+"]");
      }
  }
}
