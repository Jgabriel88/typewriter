const sentence = "hello there from lighthouse labs";


// setTimeout(() => {
//   for (const char of sentence) {
//     process.stdout.write(char);
//   }
// }, 1000)

function timeout() {
  let delay = 1000
  for (const char of sentence) {
    delay += 50
    setTimeout(function () {
      process.stdout.write(char)
    }, delay);
  }
  setTimeout(function () {
    console.log("")
  }, delay)
}


timeout(sentence)