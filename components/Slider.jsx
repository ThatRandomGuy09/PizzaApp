import styles from "../styles/slider.module.css"
import Image from "next/image";


const slider = () =>{
    const images = [

        "/img/Featured.png",
        "/img/Featured1.png",
        "/img/Featured2.jpg",
    ];

    return(
        

        <div className={styles.container}>
        <Image src="/img/arw.png" alt=""  layout="fill"/>
        <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
        {images.map((img, i) => (

            <Image src="/img/Featured.png" key={i}  alt="" layout="fill" />

        ))}
        
        </div>
        
        </div>
        <Image src="/img/arrowr.png" alt="" layout="fill"/>
        </div>
        
        
        
    );

}

export default slider;