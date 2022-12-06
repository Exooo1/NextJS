import {useEffect, useState} from "react";
import Head from "next/head";
import axios from 'axios';
import styles from '../styles/AnimeCategories/PopularAnime.module.scss'

// const getAnime = async (setAnime: (a: Array<any>) => void) => {
//     const {data} = await axios.get("https://gogoanime.consumet.org/popular")
//     console.log(data)
//     setAnime(data)
// }

const PopularAnima = () => {
    const [anime, setAnime] = useState<any>()
    useEffect(() => {
        const t = async()=>{
            const data = await fetch('https://gogoanime.consumet.org/search?keyw=naruto')
            const result = await data.json()
            console.log(result)
        }
        t()
        // getAnime(setAnime)
    }, [])
    return <div className={styles.container}>
        <Head>
            <title>Anime</title>
        </Head>
        <h1>Hi there!</h1>
    </div>
}
export default PopularAnima