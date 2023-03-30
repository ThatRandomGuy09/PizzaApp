import styles from "../styles/Slider.module.css"
import Image from "next/legacy/image";
import { useState } from "react";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/Pizza3.png",
    "/img/Pizza2.png",
    "/img/Pizza1.png",
    
  ];

  const handleArrow=(direct)=>{
    if(direct=="l"){
        setIndex(index!==0 ? index-1 : 2)
    }
    
    if(direct=="r"){
        setIndex(index!==2 ? index+1 : 0)
    }
    console.log(index);

  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{left:0}} objectFit="contain" onClick={()=>handleArrow("l")}>
        <Image src="/img/arw.png" alt=""  height={100} width={100}/>
      </div>        
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>        
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain"/>
          </div>
        ))}      
      </div>
      <div className={styles.arrowContainer} style={{right:0}} objectFit="contain" onClick={()=>handleArrow("r")}>
        <Image src="/img/arrowr.png" alt=""  height={100} width={100}  />
      </div>
    </div>
  );
}

export default Slider;


