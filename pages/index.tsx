import styles from '../styles/Home.module.css'
import {useState} from "react";
import SimpleButton from "./Button/SimpleButton";
import Link from "next/link";

export default function Home() {
    const [count, setCount] = useState<number>(0)
    const [links, setLinks] = useState([
        {id: 1, name: 'about'},
        {id: 2, name: 'main'},
        {id: 3, name: 'home'},
        {id: 4, name: 'toolkit'},
    ])
    return (
        <div className={styles.container}>
            <h1>Hello NextJS!</h1>
            <h2>I m beginner</h2>
            <h3>Count please {count}</h3>
            <button onClick={() => setCount(state => state + 1)}>click</button>
            <SimpleButton/>
            {links.map(item => <Link href={item.name}>{item.name}</Link>)}
        </div>
    )
}
