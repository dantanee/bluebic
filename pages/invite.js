import styles from '../styles/invite.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
export default function Invite () {
    return(
        <div className={styles.container}>
            <Head>
                <title>Invite</title>
            </Head>
            <Nav />
            <div>
                <img src="/images/check.png" alt="checkmark"/>
            </div>
        <div className={styles.main}>
            <h1>Thank you!</h1>
            <p>You have submitted your first book <br /> review. Now it's time
                to make some friends.
            </p>
            <div className={styles.buttonSec}>
                <Link href="/login">
                    <a><button>ADD FRIENDS</button></a>
                </Link>
            </div>
            <p>YOU MAY ALSO BE INTERESTED IN:</p>
            <div className={styles.gridContainer}>
            <div className={styles.cardContainer}>
                <div className={styles.desc}>
                    <img src="/images/wastelands-big.png" alt="wastelands"/>
                    <p>
                        <strong>The Wastelands</strong>
                    </p>
                    <span>Stephen King</span>
                </div>
                <div className={styles.desc}>
                    <img src="/images/eat-awesome.png" alt="eat-awesome" />
                    <p>
                        <strong>Eat Awesome</strong></p>
                    <span>Paul Jarvis</span>
                </div>
                <div className={styles.desc}>
                    <img src="/images/kiedis-small.png" alt="eat-awesome" />
                    <p><strong>Scar Tissue</strong></p>
                    <span>Anthony kiedis</span>
                </div>
            </div>
            </div>
            
        </div>
        </div>
    )
}