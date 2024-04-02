const menu = document.querySelector('.menu1')
const burger = document.querySelectorAll('.burger')

burger?.forEach(burger => {
	burger.addEventListener('click', () => {
		menu.classList.toggle('active')
	})
})

const exit = document.querySelector('.exit')
const allowBtn = document.querySelectorAll('.allow__btn')

allowBtn?.forEach(el => {
	el.addEventListener('click', handleAllow)
})
exit?.addEventListener('click', handleAllow)

function handleAllow() {
	document.querySelector('.allow').classList.toggle('active')
}
