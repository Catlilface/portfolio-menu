const cards = document.getElementsByClassName('card')
var circularized = false

document.onmousemove = (event) => {
	if (event.clientX > window.innerWidth / 2 - window.innerHeight / 2 && event.clientX < window.innerWidth / 2 + window.innerHeight / 2) {
		if (!circularized) {
			circularize()
		}
	} else {
		if (circularized) {
			randomize()
		}
	}
}

for (let i = 0; i < cards.length; i++) {
	cards[i].style.left = window.innerWidth / 2 - cards[i].offsetWidth / 2 + leftAddition(i) + 'px'
	cards[i].style.top = window.innerHeight / 2 - cards[i].offsetHeight / 2 + topAddition(i) + 'px'
	cards[i].style.background = `rgba(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`
	cards[i].style.opacity = Math.random()
}

function leftAddition(n) {
	let choose = (Math.random() < 0.5) ? -1 : 1
	return 150 * Math.random() * choose
}

function topAddition(n) {
	let choose = (Math.random() < 0.5) ? -1 : 1
	return 150 * Math.random() * choose
}

function circularize() {
	if (window.innerWidth > window.innerHeight) {
		for (let i = 0; i < cards.length; i++) {
			cards[i].style.left = window.innerWidth / 2 - cards[i].offsetWidth / 2 + Math.cos(2 * Math.PI / cards.length * (i + 1)) * (window.innerHeight - cards[i].offsetHeight - 80) / 2 + 'px'
			cards[i].style.top = window.innerHeight / 2 - cards[i].offsetHeight / 2 + Math.sin(2 * Math.PI / cards.length * (i + 1)) * (window.innerHeight - cards[i].offsetHeight - 80) / 2 + 'px'
			cards[i].style.opacity = 1
		}
	} else {
		for (let i = 0; i < cards.length; i++) {
			cards[i].style.left = window.innerWidth / 2 - cards[i].offsetWidth / 2 + Math.cos(2 * Math.PI / cards.length * (i + 1)) * (window.innerWidth - cards[i].offsetHeight - 80) / 2 + 'px'
			cards[i].style.top = window.innerHeight / 2 - cards[i].offsetHeight / 2 + Math.sin(2 * Math.PI / cards.length * (i + 1)) * (window.innerWidth - cards[i].offsetHeight - 80) / 2 + 'px'
			cards[i].style.opacity = 1
		}
	}
	circularized = true
}

function randomize() {
	for (let i = 0; i < cards.length; i++) {
		cards[i].style.left = window.innerWidth / 2 - cards[i].offsetWidth / 2 + leftAddition(i) + 'px'
		cards[i].style.top = window.innerHeight / 2 - cards[i].offsetHeight / 2 + topAddition(i) + 'px'
		cards[i].style.opacity = (Math.random() + 1) / 2
	}
	circularized = false
}

function magic() {
	this.style.background = "#fff"
}