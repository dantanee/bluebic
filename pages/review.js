import Head from 'next/head'
import styles from '../styles/review.module.css'
import Header from '../components/header'

export default function review () {
    return(
            <div className={styles.container}>
                <Head>
                    <title>Reviews</title>
                </Head>
            <Header title="Add Book Review"/>
            <div className={styles.main}>
               
            <div className={styles.cardSection}>
                
                    <img  src="/images/kiedis2.png" alt="kiedis"/>
                
                <div className={styles.bookDesc}>
                    <h3>Pet Sematary</h3>
                    <p>Jason Fried</p>
                    <h3>
                        <img src="/images/icon-star.svg" alt="star" />
                        <span>5.69</span>
                    </h3>
                  
                    <p>2464 reviews</p>
                </div>
            </div>
            <div className={styles.description}>
                <p>
                Sometimes dead is better....When the Creeds move into a beautiful old house in rural Maine, 
                it all seems too good to be true: physician father, beautiful wife, charming little daughter,
                 adorable infant son -- and now an idyllic home....
                </p>
                <h2 className={styles.synopsis}>Full Synopsis</h2>
                <hr/>
                <h2 >TAP TO ADD RATING</h2>
                <div className={styles.addRating}>
                    <img src="/images/icon-star.svg"/>
                    <img src="/images/icon-star.svg"/>
                    <img src="/images/icon-star.svg"/>
                    <img src="/images/icon-star.svg"/>
                    <img src="/images/icon-star-dark.svg"/>
                    
                </div>
              
            </div>
            <div className={styles.button}>
            <button>NEXT</button>
        </div>
        </div>
            </div>
        
    )
}