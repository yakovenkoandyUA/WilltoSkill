import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false)
  const [selectValue, setSelectValue] = useState<string>('🇺🇦 Uk')
  const [burgerVisible, setBurgerVisible] = useState<boolean>(false)

  const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    setSelectValue(target.textContent || '')
    setMenuVisible(false)

    	if (target.textContent === '🇺🇦 Uk') {
				i18n.changeLanguage('ch')
			} else {
				i18n.changeLanguage('ad')
			}
  }

  const { i18n, t } = useTranslation()
  return (
		<header>
			<nav>
				<h1 className="title">Logo</h1>

				<div className="select">
					<p className="select-text-value" onClick={() => setMenuVisible(true)}>
						{selectValue}
					</p>
					<svg
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 0.5L5 5.5L10 0.5H0Z" fill="white" />
					</svg>
					{menuVisible && (
						<div className="select_list active" onClick={handleSelect}>
							<p className="select-text">🏴󠁧󠁢󠁥󠁮󠁧󠁿 En</p>
							<p className="select-text">🇺🇦 Uk</p>
						</div>
					)}
				</div>

				<div className="burger" onClick={() => setBurgerVisible(true)}>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</div>
			</nav>
			<div>
				<img className="symbol" src="./bunny.png" alt="" />
			</div>

			{burgerVisible && <div className="menu1 active  container">
				<nav className="menu1_logo">
					<h1 className="title">Logo</h1>
					<svg
						className="burger"
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
            onClick={() => setBurgerVisible(false)}
					>
						<path
							d="M13.6894 0.321183C13.5912 0.222737 13.4745 0.144632 13.3461 0.0913403C13.2176 0.0380489 13.0799 0.0106179 12.9408 0.0106179C12.8018 0.0106179 12.6641 0.0380489 12.5356 0.0913403C12.4072 0.144632 12.2905 0.222737 12.1923 0.321183L7 5.50284L1.80774 0.310565C1.70951 0.212118 1.59283 0.134014 1.46438 0.0807224C1.33593 0.027431 1.19823 0 1.05916 0C0.920091 0 0.782389 0.027431 0.653937 0.0807224C0.525485 0.134014 0.408805 0.212118 0.31058 0.310565C-0.103527 0.724672 -0.103527 1.39362 0.31058 1.80772L5.50284 6.99999L0.31058 12.1923C-0.103527 12.6064 -0.103527 13.2753 0.31058 13.6894C0.724687 14.1035 1.39363 14.1035 1.80774 13.6894L7 8.49715L12.1923 13.6894C12.6064 14.1035 13.2753 14.1035 13.6894 13.6894C14.1035 13.2753 14.1035 12.6064 13.6894 12.1923L8.49716 6.99999L13.6894 1.80772C14.0929 1.40423 14.0929 0.724673 13.6894 0.321183Z"
							fill="white"
						/>
					</svg>
				</nav>
				<h2 className="menu_title">Контакти</h2>
				<a href="./instruction.html" target="_blank" className="menu_title-link">
					<h2 className="menu_title">Твої можливості</h2>
				</a>
				<a href="#" className="menu_mail">
					buyme@gmail.com
				</a>
				<a href="#" className="menu_mail">
					+380956678890
				</a>

				<div className="divider"></div>
				<div className="menu_lang">
					<p className="menu_text">Змінити мову</p>
					<div className="select">
						<p className="select-text">🇺🇦 Uk</p>
						<svg
							width="10"
							height="6"
							viewBox="0 0 10 6"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M0 0.5L5 5.5L10 0.5H0Z" fill="white" />
						</svg>
					</div>
				</div>
			</div> }
		</header>
	)
}

export default Header