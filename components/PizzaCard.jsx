import styles from "../styles/Card.module.css"
import Image from "next/legacy/image";

const Card =()=>{

    return (

        <div className={styles.container}>
        <Image src="/img/pizza.png" alt=""  width="500" height="500" />
        <h1 className={styles.title}>Margherita</h1>
      <span className={styles.price}>480 ₹</span>
      <p className={styles.description}>
       This classic pizza is made with tomato sauce, fresh mozzarella cheese, and fresh basil. It is named after Queen Margherita of Savoy, who was said to have been a fan of this pizza.

       
      </p>
        
        </div>
    )

}

export default Card;