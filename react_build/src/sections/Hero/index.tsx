import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {  ModalMenu } from '../../components'
import './styles.scss'

const Hero: FC = () => {
	const [menuVisible, setMenuVisible] = useState<boolean>(false)
	// const { t, i18n } = useTranslation()

	useEffect(() => {
		document.body.style.overflowY = menuVisible ? 'hidden' : 'auto'
	}, [menuVisible])

	const handleMenuOpen = () => setMenuVisible(true)

	return (
		<section>
			
			{menuVisible && <ModalMenu setVisible={setMenuVisible} />}
		</section>
	)
}

export default Hero
