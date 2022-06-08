import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
    const router = useRouter();
    const [counter, setCounter] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (counter == 0) {
            router.push("/feedback");
        }
    }, [counter]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Counter</h1>
            <h1 className={styles.timer}>
                {counter} <span className={styles.description}>s</span>
            </h1>
        </div>
    );
}
