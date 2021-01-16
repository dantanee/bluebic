import {useState} from 'react'
import styles from '../styles/header.module.css'
import Sidedrawer from '../components/sideDrawer'
import{FaBars} from 'react-icons/fa'
import Backdrop from './backdrop'
export default function header ({title}) {
    const[open,setOpen] = useState(false)

    let drawer ;
    let backdrop;
    if(open){
        drawer=<Sidedrawer open={open} />
        backdrop=<Backdrop close={()=> setOpen(false)}/>
    }

    return(
        <div>
             {drawer}
                {backdrop}
            <div className={styles.container}>
            <div className={styles.menu}>
                <div className={styles.button}>
                    
                        <FaBars className={styles.icon} onClick={() => setOpen(!open)} size={20} />
                    
                </div>
            </div>
            <div className={styles.headerItems}> 
                <h1>{title}</h1>
            </div>
               
        </div>
        </div>
        
    )
    
}