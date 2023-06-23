const ball = document.querySelector('.ball')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answersArr = ['Tak!', 'Nie!', 'Może...', 'Ciężko powiedzieć...', 'Lepiej nie wiedzieć...']

const genereteAnswer = () => {
	const number = Math.floor(Math.random() * 5)
	answer.innerHTML = `<span>Odpowiedź: </span> ${answersArr[number]}`
}

ball.addEventListener('click', genereteAnswer)
