const phrase = ["A Chip on Your Shoulder", "A Dime a Dozen", "A Fool and His Money Are Soon Parted", "A Piece of Cake", "An Arm and a Leg", "Back to Square One", "Barking Up The Wrong Tree", "Beating Around the Bush", "Between a Rock and a Hard Place", "Burst Your Bubble"]
const click = document.getElementById('click')
const display = document.querySelector('.phrase')

click.addEventListener('click', function () {
  display.textContent = phrase[getRandomPhrase()]
})

function getRandomPhrase() {
  return Math.floor(Math.random() * phrase.length)
}
