import Home from '../components/home/home'
import React, { useRef } from "react";
import { Slide } from 'react-slideshow-image';
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/welcome.module.css'
import 'react-slideshow-image/dist/styles.css'
import {userAuth } from '../auth'
import Container from '../components/Container';
const image1URL = "/images/reviews.png"
const image2URL="/images/book.png"

export default function welcome () {
    const slideRef = useRef()
    const properties = {
        arrows:false,
        duration:2000
    }
    const back = () => {
        slideRef.current.goBack();
      }
    
      const next = () => {
        slideRef.current.goNext();
      }
      const {user} = userAuth;
    return(
            <Container>
                <div className={styles.contain}>
                <Head>
                    <title>Blue Bic</title>
                </Head>
                <div className={styles.ball1}></div>
                <div className={styles.ball2}></div>
                
                <div className="slide-container">
                
            <Slide {...properties} ref={slideRef} >
            
                <div className="each-slide">
                    <Home heading="Review Them" image={image1URL}/>
                </div>
                <div className="each-slide">
                    <Home heading="Read Them" image={image2URL}/>
                </div>
            </Slide>
            <div className={styles.arrows}>
                <div className={styles.left}><FaArrowLeft  color="white" onClick={back}/></div>
                <div className={styles.right}><FaArrowRight  color="white" onClick={next} /></div>
                </div>
                <div className={styles.bottom}>
                <Link href="/">
                <a className={styles.link}>Skip Intro</a>
                </Link>
                <Link href={user ? "/mybooks":"/login"}><a><button className={styles.button}>VIEW TASK</button></a></Link>
                </div>
                
            </div>
        </div>
            </Container>
            
    )
}
