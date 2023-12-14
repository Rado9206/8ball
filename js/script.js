const ball = document.querySelector('.ball')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answersArr = ['Tak!', 'Raczej tak...', 'I to jak...', 'Nie!', 'Może...', 'Ciężko powiedzieć...', 'Lepiej nie wiedzieć...']

const shakeBall = () => {
	ball.classList.add('shake-animation')
	setTimeout(checkInput, 1000)
}

const checkInput = () => {

	answer.style.visibility = 'hidden'

	if (input.value !== '' && input.value.slice(-1) === '?') {
		genereteAnswer()
		error.textContent = ''
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakończone znakiem "?".'
		answer.textContent = ''
	} else {
		error.textContent = 'Musisz zadać jakieś pytanie!'
		answer.textContent = ''
	}
	ball.classList.remove('shake-animation')
}

const genereteAnswer = () => {
	answer.style.visibility = 'visible'
	const number = Math.floor(Math.random() * 5)
	answer.innerHTML = `<span>Odpowiedź: </span> ${answersArr[number]}`
}

ball.addEventListener('click', shakeBall)
