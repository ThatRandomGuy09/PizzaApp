import Products from '@/components/Products'
import Slider from '@/components/Slider'
import Head from 'next/head'
import Image from 'next/legacy/image'
import styles from "../styles/Home.module.css"




export default function Home() {
  return (
   <div className={styles.container}>
      <Head>
        <title>PizzaApp</title>
        <meta name="description" content="PizzaShop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <Slider/>
      <Products/>
      
      

      </div>
    

    )
  }
    
     
    
  

