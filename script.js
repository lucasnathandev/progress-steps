const progress = document.querySelector("#progress")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const circles = document.querySelectorAll(".circle")

let currentActive = 1

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      return circle.classList.add("active")
    }
    circle.classList.remove("active")
  })
  const actives = document.querySelectorAll(".circle.active")

  const percentual = ((actives.length - 1) / (circles.length - 1)) * 100
  progress.style.width = `${percentual}%`
}

next.addEventListener("click", () => {
  currentActive++
  if (currentActive < circles.length) {
    prev.disabled = false
    return update()
  }

  next.disabled = true
  update()
})

prev.addEventListener("click", () => {
  currentActive--
  if (currentActive > 1) {
    next.disabled = false
    return update()
  }
  prev.disabled = true
  update()
})
