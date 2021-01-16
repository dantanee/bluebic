
import styles from '../styles/books.module.css'
import Header from './header'

export default function Books () {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Header title="My Book List"/>
            </div> 
            <div className={styles.topContainer}>
            <div className={styles.inputContainer}>
                    <input className={styles.input}  type="text" placeholder="Search Books"/>
                    <div className={styles.search}><img src="/images/search-new.png" /></div> 
             </div>
            </div>
            
            <div className={styles.main}>
            <div className={styles.cardContainer}>
                 <p>BOOKS REVIEWED BY YOU</p>
             <div className={styles.cardSection}>
                 <div className={styles.card}>
                     <img src="/images/remote.png" alt="remote-book-cover" />
                     <div className={styles.description}>
                         <h3>Not Remote:Full Time Required</h3>
                        <p>Jason Fried</p>
                        <div className={styles.rating}>
                            <img src="/images/icon-star.svg" alt="icon-star"/>
                            <img src="/images/icon-star.svg" alt="icon-star"/>
                            <img src="/images/icon-star.svg" alt="icon-star"/>
                            <img src="/images/icon-star.svg" alt="icon-star"/>
                            <img src="/images/icon-star.svg" alt="icon-star"/>
                        </div>
                     </div>
                 </div>
                 <div className={styles.card}>
                     <img src="/images/papilon.png" alt="remote-book-cover" />
                     <div className={styles.description}>
                         <h3>Full Time:Remote Not Required</h3>
                        <p>Henri Charriere</p>
                        <div className={styles.rating}>
                            <img src="/images/icon-star.svg" alt="icon-star"/>
                            <img src="/images/icon-star.svg" alt="icon-star"/>
                            <img src="/images/icon-star.svg" alt="icon-star"/>
                            <img src="/images/icon-star-dark.svg" alt="icon-star" />
                            <img src="/images/icon-star-dark.svg" alt="icon-star" />
                        </div> 
                            
                     </div>
                 </div>
                 <div className={styles.card}>
                     <img src="/images/wastelands.png" alt="wasteland book" />
                     <div className={styles.description}>
                         <h3>The Dark Tower The Gun Slinger</h3>
                        <p>Stephen Kings</p>
                        <div className={styles.rating}>
                            <img src="/images/icon-star.svg" alt="icon-star"/>
                            <img src="/images/icon-star.svg" alt="icon-star"/>
                            <img src="/images/icon-star-dark.svg" alt="icon-star" />
                            <img src="/images/icon-star-dark.svg" alt="icon-star" />
                            <img src="/images/icon-star-dark.svg" alt="icon-star" />
                        </div>
                     </div>
                 </div>
                 </div>
                 
             </div>
             <div className={styles.buttonContainer}>
                     <button className={styles.button}>ADD BOOK REVIEW</button>
                 </div>
            </div>
         </div>
    )
}