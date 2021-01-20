import React from 'react'
import Link from 'next/link'
import styles from '../styles/account.module.css'

const accountConfirmation = () => {
    return(
        <div className={styles.container}>
             <h1>Account Successfully Created</h1>
        <p>Go back to login now</p>
        <Link href="/login"><a>Login</a></Link>
        </div>
    )
}
export default accountConfirmation;