import styles from '../styles/IndexStyles/Index.module.scss'
import {AnimaCategories} from "../components/AnimeCategories/AnimaCategories";

export type AnimeCategories = {
    path: string
    color: string
    id: number
}
const arrayAnimeCategories: Array<AnimeCategories> = [
    {id: 1, path: '/popular-anime', color: 'green'},
    {id: 2, path: '/search-anime', color: 'yellow'},
    {id: 3, path: '/top-anime', color: 'blue'},
    {id: 4, path: '/top-anime', color: 'red'},
]
export default function Home() {
    return (
        <nav className={styles.container}>
            <div className={styles.container_content}>
                {arrayAnimeCategories.map(item => <AnimaCategories key={item.id + item.path} {...item}/>)}
            </div>
        </nav>
    )
}
