import styles from '../styles/backdrop.module.css'
export default function Backdrop ({close})  {
    return(
        <div onClick={close} className={styles.backdrop} />
    )
}
