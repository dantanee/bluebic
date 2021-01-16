import styles from '../../styles/welcome.module.css'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'
import Link from 'next/link'
import Head from 'next/head'
export default function home ({heading,image}) {
    return (
        
        <div className={styles.container}>
            <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"/>

            </Head>
            <div className={styles.main}>
                <img src={image} alt="review-logo"/>
                <div className={styles.text}>
                <h1>
                    {heading}
                </h1>
                <p>Create your account and get started.</p>
                <p>After that you can share books and make friends.</p>
                </div>
            </div>
                
        </div>
    )
}
