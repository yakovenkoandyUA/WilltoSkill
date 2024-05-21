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

const select = document.querySelector('.select')
const selectList = document.querySelector('.select_list')
const selectText = document.querySelector('.select-text-value')
select?.addEventListener('click', e => {
	selectList.classList.toggle('active')
})

const langSwitch = document.querySelector('.menu_title')
const langSwitch1 = document.querySelector('.menu_title-link')
const langSwitch2 = document.querySelector('.menu_text')
const langSwitch3 = document.querySelector('.hero_title')
const langSwitch4 = document.querySelector('.hero_text')
const langSwitch5 = document.querySelector('.btn:last-child')
const langSwitch14 = document.querySelector('.btn:first-child')
const langSwitch6 = document.querySelector('.category_title')
const langSwitch7 = document.querySelector('.country_title')
const langSwitch8 = document.querySelector('.partners-title')
const langSwitch9 = document.querySelector('.form_title')
const langSwitch10 = document.querySelector('.list_categ-item:nth-child(1)')
const langSwitch11 = document.querySelector('.list_categ-item:nth-child(2)')
const langSwitch12 = document.querySelector('.list_categ-item:nth-child(3)')
const langSwitch13 = document.querySelector('.list_categ-item:nth-child(4)')
const langSwitch15 = document.querySelector('.label:nth-child(1)  .label_text')
const langSwitch16 = document.querySelector('.label:nth-child(2) .label_text')
const langSwitch17 = document.querySelector('.label:nth-child(3) .label_text')
const langSwitch18 = document.querySelector('.label:nth-child(4) .label_text')
const langSwitch19 = document.querySelector('.label:nth-child(5) .label_text')
const langSwitch20 = document.querySelector('.label:nth-child(6) .label_text')
const langSwitch21 = document.querySelector('.label:nth-child(7) .label_text')
const langSwitch22 = document.querySelector('.form_sbmt')
selectList?.addEventListener('click', e => {
	const target = e.target
	if (target.classList.contains('select-text')) {
		selectText.textContent = target.textContent
		localStorage.setItem('lang', target.textContent)
	}

	if (!target.textContent.includes('En')) {
		langSwitch ? (langSwitch.textContent = 'Контакти') : null
		langSwitch1 ? (langSwitch1.textContent = 'Твої можливості') : null
		langSwitch2 ? (langSwitch2.textContent = 'Змінити мову') : null
		langSwitch3 ? (langSwitch3.textContent = 'Отримуй та надавай послуги по всьому світу') : null
		langSwitch4 ? (langSwitch4.textContent = 'Бажаєш отримати товар з-за кордону, або можеш комусь допомогти комусь? Обирай нижче') : null
		langSwitch5 ? (langSwitch5.textContent = 'Хочу') : null
		langSwitch14 ? (langSwitch14.textContent = 'Можу') : null
		langSwitch6 ? (langSwitch6.textContent = 'Оберіть категорію') : null
		langSwitch7 ? (langSwitch7.textContent = 'Дивитися пропозиції в конкретній країні') : null
		langSwitch8 ? (langSwitch8.textContent = 'Наші партнери') : null
		langSwitch9 ? (langSwitch9.textContent = 'Виберіть категорію') : null
		langSwitch10 ? (langSwitch10.textContent = 'Допомога') : null
		langSwitch11 ? (langSwitch11.textContent = 'Безкоштовно') : null
		langSwitch12 ? (langSwitch12.textContent = 'Одяг') : null
		langSwitch13 ? (langSwitch13.textContent = 'Тварини') : null

		langSwitch15 ? (langSwitch15.textContent = 'Країна запиту*') : null
		langSwitch16 ? (langSwitch16.textContent = 'Країна мешкання*') : null
		langSwitch17 ? (langSwitch17.textContent = 'Місто*') : null
		langSwitch18 ? (langSwitch18.textContent = 'Адреса') : null
		langSwitch19 ? (langSwitch19.textContent = 'Індекс') : null
		langSwitch20 ? (langSwitch20.textContent = 'Винагорода*') : null
		langSwitch21 ? (langSwitch21.textContent = 'Валюта*') : null
		langSwitch22 ? (langSwitch22.textContent = 'Опублікувати*') : null
	} else {
		langSwitch ? (langSwitch.textContent = 'Contact') : null
		langSwitch1 ? (langSwitch1.textContent = 'Your Opportunities') : null
		langSwitch2 ? (langSwitch2.textContent = 'Change language') : null
		langSwitch3 ? (langSwitch3.textContent = 'Receive and deliver services worldwide') : null
		langSwitch4 ? (langSwitch4.textContent = 'Do you want to receive goods from abroad, or can you help someone else Choose below') : null
		langSwitch5 ? (langSwitch5.textContent = 'I can to') : null
		langSwitch14 ? (langSwitch14.textContent = 'I want to') : null
		langSwitch6 ? (langSwitch6.textContent = 'Select a category') : null
		langSwitch7 ? (langSwitch7.textContent = 'See offers in a specific country') : null
		langSwitch8 ? (langSwitch8.textContent = 'Our partners') : null
		langSwitch9 ? (langSwitch9.textContent = 'Select a category') : null
		langSwitch10 ? (langSwitch10.textContent = 'Help') : null
		langSwitch11 ? (langSwitch11.textContent = 'Free') : null
		langSwitch12 ? (langSwitch12.textContent = 'Clothes') : null
		langSwitch13 ? (langSwitch13.textContent = 'Animals') : null

		langSwitch15 ? (langSwitch15.textContent = 'Country of request*') : null
		langSwitch16 ? (langSwitch16.textContent = 'Country of residence*') : null
		langSwitch17 ? (langSwitch17.textContent = 'City*') : null
		langSwitch18 ? (langSwitch18.textContent = 'Address') : null
		langSwitch19 ? (langSwitch19.textContent = 'Index') : null
		langSwitch20 ? (langSwitch20.textContent = 'Reward*') : null
		langSwitch21 ? (langSwitch21.textContent = 'Currency*') : null
		langSwitch22 ? (langSwitch22.textContent = 'Publish') : null
	}
})

window.addEventListener('DOMContentLoaded', () => {
	const lang = localStorage.getItem('lang')
	if (lang?.includes('En')) {
		selectText.textContent = lang

		langSwitch ? (langSwitch.textContent = 'Contact') : null
		langSwitch1 ? (langSwitch1.textContent = 'Your Opportunities') : null
		langSwitch2 ? (langSwitch2.textContent = 'Change language') : null
		langSwitch3 ? (langSwitch3.textContent = 'Receive and deliver services worldwide') : null
		langSwitch4 ? (langSwitch4.textContent = 'Do you want to receive goods from abroad, or can you help someone else Choose below') : null
		langSwitch5 ? (langSwitch5.textContent = 'I can to') : null
		langSwitch14 ? (langSwitch14.textContent = 'I want to') : null
		langSwitch6 ? (langSwitch6.textContent = 'Select a category') : null
		langSwitch7 ? (langSwitch7.textContent = 'See offers in a specific country') : null
		langSwitch8 ? (langSwitch8.textContent = 'Our partners') : null
		langSwitch9 ? (langSwitch9.textContent = 'Select a category') : null
		langSwitch10 ? (langSwitch10.textContent = 'Help') : null
		langSwitch11 ? (langSwitch11.textContent = 'Free') : null
		langSwitch12 ? (langSwitch12.textContent = 'Clothes') : null
		langSwitch13 ? (langSwitch13.textContent = 'Animals') : null
	} else {
		langSwitch ? (langSwitch.textContent = 'Контакти') : null
		langSwitch1 ? (langSwitch1.textContent = 'Твої можливості') : null
		langSwitch2 ? (langSwitch2.textContent = 'Змінити мову') : null
		langSwitch3 ? (langSwitch3.textContent = 'Отримуй та надавай послуги по всьому світу') : null
		langSwitch4 ? (langSwitch4.textContent = 'Бажаєш отримати товар з-за кордону, або можеш комусь допомогти комусь? Обирай нижче') : null
		langSwitch5 ? (langSwitch5.textContent = 'Хочу') : null
		langSwitch14 ? (langSwitch14.textContent = 'Можу') : null
		langSwitch6 ? (langSwitch6.textContent = 'Оберіть категорію') : null
		langSwitch7 ? (langSwitch7.textContent = 'Дивитися пропозиції в конкретній країні') : null
		langSwitch8 ? (langSwitch8.textContent = 'Наші партнери') : null
		langSwitch9 ? (langSwitch9.textContent = 'Виберіть категорію') : null
		langSwitch10 ? (langSwitch10.textContent = 'Допомога') : null
		langSwitch11 ? (langSwitch11.textContent = 'Безкоштовно') : null
		langSwitch12 ? (langSwitch12.textContent = 'Одяг') : null
		langSwitch13 ? (langSwitch13.textContent = 'Тварини') : null
	}
})




const file = document.querySelector('.label-field')

file?.addEventListener('change', e => {
	const file = e.target.files[0]
	console.log(file)

	const searchBtn = document.querySelector('.search-btn')
	const nameFile = document.createElement('p')
	nameFile.classList.add('name-file')
	nameFile.textContent = file.name
	searchBtn.before(nameFile)
})