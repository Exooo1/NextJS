import styles from '../../styles/HeaderStyles/Header.module.scss'
import Image from 'next/image'
import logo from '../../public/logo.png'

export const Header = () => {
    return <div className={styles.container}>
        <h1>Anime Site</h1>
        <Image src={logo}
               alt="something"
               placeholder="blur"/>
    </div>
}