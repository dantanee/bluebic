import {useState} from 'react'
import styles from '../styles/login.module.css'
import Head from 'next/head'
import Nav from '../components/Nav'
export default function Login () {
    const[open1,setOpen1] = useState(false);
    const[open2,setOpen2] = useState(false)
    
    let inputType1 = "password"
    if(open1){
        inputType1="text"
    }
    let inputType2 = "password"
    if(open2){
        inputType2="text"
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Login/Signup</title>
            </Head>
            <div className={styles.ball}></div>
           <Nav />
            <div className={styles.mainContainer}>
                <div className={styles.circle}></div>
            <div className={styles.bulb}>
                <img src="/images/bulb.png" alt="review logo" />
            </div> 
            
            <div className={styles.textContainer}>
            <div className={styles.text}>
                <h1>Welcome!</h1>
                <p>Create your account and get started.<br/>
                After that, you can share books and make friends</p>
            </div>
            </div>
            
            <div className={styles.formSection}>
            <div className={styles.form}>
               
                    
                    <label className={styles.label}>
                        Email
                     </label>
                     <input className={styles.input} type="email" placeholder="email@bluebic.com"/>
                    </div>
                    <div className={styles.form}>
                    
                    <label className={styles.label}>
                        Password
                     </label>
                     <div className={styles.inputIcon}>
                     <input className={styles.input} type={inputType1} placeholder="Enter Password"/>
                     <div  className={styles.iconContainer} onClick={() => setOpen1(!open1)}>
                         
                         {open1 ? <img src="/images/open-eyes.png" alt="closed-eye"/>:
                        <img src="/images/closed-eyes.png" alt="open-eyes" />
                        }
                         </div>
                     </div>
                    
                     </div>
                    <div className={styles.form}>
                    
                    <label className={styles.label}>
                        Type Password Again
                     </label>
                     <div className={styles.inputIcon}>
                     <input className={styles.input} type={inputType2} placeholder="Re-Type Password"/>
                     <div className={styles.iconContainer} onClick={() => setOpen2(!open2)}>
                        {open2 ? <img src="/images/open-eyes.png" alt="closed-eye"/>:
                        <img  src="/images/closed-eyes.png" alt="open-eyes" />
                        }
                     </div>
                     
                     </div>
                    
                    </div> 
                    <div className={styles.buttonContainer}>
                    <button className={styles.button}>SIGN UP</button>
                    </div>
            </div>
            
            <p style={{color:"#384F7D",textAlign:"center",marginBottom:"20px"}}>Already have an account?Login</p>
        </div>
           
        </div>
        
    )
}