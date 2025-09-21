const btn = document.getElementById("btn")
const para = document.getElementById("para")


btn.addEventListener("click" , function () {
  btn.style.backgroundColor = genrateRandomColor()
  para.style.backgroundColor = genrateRandomColor()
  para.textContent = genrateRandomQoete()
})

function genrateRandomColor() {
  let randomR = Math.random() * 255
  let randomG = Math.random() * 255
  let randomB = Math.random() * 255
  return `rgb(${randomR} ${randomG} ${randomB})`
}

function genrateRandomQoete() {
  let randomQ;
  let randomNum = Math.ceil( Math.random() * 3)
  if (randomNum ===1) {
    randomQ =  '"Be yourself; everyone else is already taken — Oscar Wilde"'
  } else if (randomNum === 2) {
    randomQ = '"Do the best you can until you know better. Then when you know better, do better — Maya Angelou"'
  } else if (randomNum ===3) {
        randomQ = '"A journey of a thousand miles begins with a single step — Lao Tzu"'
  }
  return `${randomQ}`
}

console.log(genrateRandomQoete())