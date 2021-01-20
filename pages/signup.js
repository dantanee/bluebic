import {useState} from 'react'
import styles from '../styles/login.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import firebase from 'firebase'
import {useForm} from 'react-hook-form';
export default function SignUp () {
   const [email,setEmail] = useState('')
   const [pass,setPass] = useState('')
   const [error,setError] = useState(null)
    const[open1,setOpen1] = useState(false);
    const[open2,setOpen2] = useState(false)
    
    const {register,handleSubmit,errors,getValues} = useForm();
    
      const onSignUp = async () => {
        
            await  firebase.auth().createUserWithEmailAndPassword(email,pass)
            .then(() => {
                window.location.href="/accountConfirmation"
            })
            .catch((error) => {
                const message = error.message
                setError(message)
            })
       
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
            <form onSubmit={e => e.preventDefault()}>
            <div className={styles.formSection}>
            {error && <p className={styles.invalid}>{error}</p>}
            <div className={styles.form}>
                    <label className={styles.label}>
                        Email
                     </label>
                     <input className={styles.input}
                      type="email" 
                      name="email"
                     placeholder="email@bluebic.com" 
                     onChange={(email)=> setEmail(email.target.value)}
                     ref={register({
                         required:"Email is required"
                     })}
                     />
                    </div>
                    <div className={styles.error}>{errors.email&&<p>{errors.email.message}</p>}</div>
                    <div className={styles.form}>
                    
                    <label className={styles.label}>
                        Password
                     </label>
                     <div className={styles.inputIcon}>
                     <input className={styles.input} 
                     type={open1?"text":"password"}
                      placeholder="Enter Password"
                      name="password"
                      onChange={(pass) => setPass(pass.target.value)}
                      ref={register({
                        required:"Password must be specified"
                           
                      })}
                      />
                      
                     <div  className={styles.iconContainer} onClick={() => setOpen1(!open1)}>
                         
                         {open1 ? <img src="/images/open-eyes.png" alt="closed-eye"/>:
                        <img src="/images/closed-eyes.png" alt="open-eyes" />
                        }
                         </div>
                     </div>
                     </div>
                     <div className={styles.error}>{errors.password&&<p>{errors.password.message}</p>}</div>
                    <div className={styles.form}>
                    <label className={styles.label}>
                        Type Password Again
                     </label>
                     <div className={styles.inputIcon}>
                     <input className={styles.input}
                     name="confirm_password"
                      type={open2?"text":"password"}
                       placeholder="Re-Type Password"
                       ref={register({
                           required:"Please confirm password",
                           validate:(value) => {
                               const {password} = getValues()
                               return password === value || 'Passwords do not match'
                           }
                       })}
                       />
                       
                     <div className={styles.iconContainer} onClick={() => setOpen2(!open2)}>
                        {open2 ? <img src="/images/open-eyes.png" alt="closed-eye"/>:
                        <img  src="/images/closed-eyes.png" alt="open-eyes" />
                        }
                     </div>
                     
                     </div>
                     <div className={styles.error}>{errors.confirm_password&&<p>{errors.confirm_password.message}</p>}</div>
                     
                     </div> 
                    <div className={styles.buttonContainer}>
                   <button type="submit" className={styles.button} 
                onClick={handleSubmit(onSignUp)}>SIGN UP</button>
                    </div> 
            </div>
            </form>
            <p style={{color:"#384F7D",textAlign:"center",marginBottom:"20px"}}>
                Already have an account? <Link href="/login"><a>Login</a></Link></p>
        </div>
           
        </div>
        
    )
}