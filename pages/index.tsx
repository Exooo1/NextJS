import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from "react";
import {SimpleButton} from "./Button/SimpleButton";

export default function Home() {
    const [count, setCount] = useState<number>(0)
    return (
        <div className={styles.container}>
            <h1>Hello NextJS!</h1>
            <h2>I'm beginner</h2>
            <h3>Count please {count}</h3>
            <button onClick={() => setCount(state => state + 1)}>click</button>
            <SimpleButton/>
        </div>
    )
}
