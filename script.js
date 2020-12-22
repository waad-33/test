const sunMoonContainer = document.querySelector('.sun-moon-container')
document.querySelector('.theme-toggle-button').addEventListener('click',() => {
	document.body.classList.toggle('dark')
	const currentRotation = parseINT(getComputedStyle(sunMoonContainer).getProptyValu('--rotation'))
	sunMoonContainer.style.setProperty('--rotation' , currentRotation + 180)
	})
