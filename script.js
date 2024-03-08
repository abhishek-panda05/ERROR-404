const width = 28
const grid = document.querySelector('.grid')
const scoreDisplay = document.getElementById('score')
let squares = []
let score = 0



const layout = [
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
	1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
	1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
	1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
	4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
	1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
	1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
	1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
	1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
	1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
	1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
	1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]

function createLayout() {
	for (let i = 0; i < layout.length; i++) {
		const square = document.createElement('div')
		grid.appendChild(square)
		squares.push(square)

		if (layout[i] === 0) {
			squares[i].classList.add("pac-dot")
		} else if (layout[i] === 1) {
			squares[i].classList.add("wall")
		} else if (layout[i] === 2) {
			squares[i].classList.add("ghost-lair")
		} else if (layout[i] === 3) {
			squares[i].classList.add("power-pellet")
		}
	}
}

createLayout()

//Inital positon of Pacman
let pacmanCurrentIndex = 490
//adds class pacman to the pacmanCurrentIndex in the squares array.
squares[pacmanCurrentIndex].classList.add('pacman')

//up key - 38
// left - 37
// right - 39
//down key - 40

function control(event) {
	squares[pacmanCurrentIndex].classList.remove('pacman')
	switch (event.keyCode) {
		case 40:
			//if the positon is more than 784 then we are outside of the layout AND the index + 28 where we are moving does not have a class of wall AND does not have class of ghost-lair
			if (!squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') && !squares[pacmanCurrentIndex + width].classList.contains('wall') && pacmanCurrentIndex + width < 784) pacmanCurrentIndex += width
			break
		case 39:
			//if module is 27 we are in the last row in the right side of the layout AND the index + 1 where we are moving does not have a class of wall AND does not have class of ghost-lair
			if (!squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair') && !squares[pacmanCurrentIndex + 1].classList.contains('wall') && pacmanCurrentIndex % width < width - 1) pacmanCurrentIndex += 1
			//if pacman is in 364 we will make him use the shortcut to the other side of the layout so we can set his position to the corresponding index in the squares array
			if (pacmanCurrentIndex === 391) {
				pacmanCurrentIndex = 364
			}
			break
		case 38:
			// if we are less than 0 on the index of squares we are outside of the layout AND the index - 28 where we are moving does not have a class of wall AND does not have class of ghost-lair
			if (!squares[pacmanCurrentIndex - width].classList.contains('ghost-lair') && !squares[pacmanCurrentIndex - width].classList.contains('wall') && pacmanCurrentIndex - width >= 0) pacmanCurrentIndex -= width
			break
		case 37:
			//if the modulus is = 0 then we are on the first row on the left side of the left AND the index - 1 where we are moving does not have a class of wall AND does not have class of ghost-lair
			if (!squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair') && !squares[pacmanCurrentIndex - 1].classList.contains('wall') && pacmanCurrentIndex % width !== 0) pacmanCurrentIndex -= 1
			//if pacman is in 391 we will make him use the shortcut to the other side of the layout so we can set his position to the corresponding index in the squares array
			if (pacmanCurrentIndex === 364) {
				pacmanCurrentIndex = 391
			}
			break
	}
	squares[pacmanCurrentIndex].classList.add('pacman')
	dotEaten()
	powerDotEaten()
	checkGameOver()
	checkWin()
}

document.addEventListener('keyup', control)

//checks if the position has the class pac-dot if so updates the score + 1
function dotEaten() {
	if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
		squares[pacmanCurrentIndex].classList.remove('pac-dot')
		score++
		//updates the html side
		scoreDisplay.innerHTML = score
		squares[pacmanCurrentIndex].classList.remove('pac-dot')
	}
}

function powerDotEaten() {
	if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
		squares[pacmanCurrentIndex].classList.remove('power-pellet')
		score += 10
		ghosts.forEach (ghost => ghost.isScared = true)
		setTimeout(unscareGhosts, 10000);
	}
}

