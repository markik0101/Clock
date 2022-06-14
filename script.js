const week = [
	'Sunday', 
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thrusday',
	'Friday',
	'Saturday'
]

const mod = document.querySelector('.mode')

mod.addEventListener('click', () => {
	document.querySelector('.mainBox').classList.toggle('dark')
	document.querySelector('.bi-brightness-high-fill').classList.toggle('bi-moon')
})

setInterval(() => {
	let session = ''
	let date = new Date()
	let index = date.getDay()
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()

	let hour = 30 * hours + minutes / 2
	let minute = 6 * minutes
	let second = 6 * seconds

	if (hours >= 12) {
		session = 'PM'
	} else {
		session = 'AM'
	}

	/*if(hours > 12) {
		hours -= 12
	}*/
	// нужно если ты привык смотреть на pm и am

	document.querySelector('.med').innerHTML = session
	document.querySelector('.date').innerHTML = week[index]
	document.querySelector('.hr').style.transform = `rotate(${hour}deg)`
	document.querySelector('.min').style.transform = `rotate(${minute}deg)`
	document.querySelector('.sec').style.transform = `rotate(${second}deg)`

	document.querySelector('#hours').innerHTML = hours
	document.querySelector('#minutes').innerHTML = minutes
	document.querySelector('#seconds').innerHTML = seconds



}, 1000)