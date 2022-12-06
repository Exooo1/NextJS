import {AnimeCategories} from "../../pages";
import Link from "next/link";
import styles from '../../styles/AnimeCategories/Categories.module.scss'

export const AnimaCategories = ({path, color}: AnimeCategories) => {
    return <Link href={path} className={styles.linkCategor}>
        <h1>Top 100 Anime</h1>
    </Link>
}