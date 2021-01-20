import '../styles/globals.css'
import {AuthProvider} from "../auth"
import {ChakraProvider} from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

// const colors = {
//   body:{
//     900:""
//   }
// }
function MyApp({ Component, pageProps }) {
  return(
    <AuthProvider>
    
    <Component {...pageProps} />
  
   </AuthProvider>
  )
}

export default MyApp
