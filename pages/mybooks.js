import Head from 'next/head'
import Books from '../components/books'
import SideDrawer from '../components/sideDrawer'
import Backdrop from '../components/backdrop'
export default function Main () {
    return(
        <div>
           <Head>
               <title>My Books</title>
           </Head>
            <Books/>
        </div>
        
    )
}