import styles from "../styles/sideDrawer.module.css"
import NavItems from '../components/NavItems'
import {FaBars} from 'react-icons/fa'
export default function sideDrawer ({open}) {
    let drawerClasses = styles.siderawer
    if(open){
        drawerClasses = [styles.siderawer,styles.open].join(' ')
    }
    
    
    return(
        
        <div className={drawerClasses}>
            
            <NavItems/>
        </div>
    )
}