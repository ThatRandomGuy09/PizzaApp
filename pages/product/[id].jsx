import styles from "../../styles/Product.module.css";
import Image from "next/legacy/image";
import { useState } from "react";


const Product = () => {
  const[size,SetSize] = useState(0);
  
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "Margherita",
    price: [250, 480, 680],
    desc: "This classic pizza is made with tomato sauce, fresh mozzarella cheese, and fresh basil. It is named after Queen Margherita of Savoy, who was said to have been a fan of this pizza."
  };
    

  return(
    <div className={styles.container}>
    <div className={styles.left}><div className={styles.imgContainer}>
    <Image src={pizza.img} objectFit="contain" alt="" height={500} width={500}/>
    
    </div>
    </div>
    <div className={styles.right}>
    <h1 className={styles.title }>{pizza.name}</h1>
    <span className={styles.price}>₹{pizza.price[size]}</span>
    <p className={styles.desc}>{pizza.desc}</p>
    <h3 className={styles.choose }>Choose Your Size</h3>
    <div className={styles.sizes}>
    <div className={styles.size} onClick={()=>SetSize(0)}>

    <Image src="/img/size.png" layout="fill" alt=""/>
    <span className={styles.number}>Small</span>

    
    </div>
    <div className={styles.size} onClick={()=>SetSize(1)}>

    <Image src="/img/size.png" layout="fill" alt=""/>
    <span className={styles.number}>Medium</span>

    
    </div>
    <div className={styles.size} onClick={()=>SetSize(2)}>

    <Image src="/img/size.png" layout="fill" alt=""/>
    <span className={styles.number}>Large</span>

    
    </div>


    </div>
    <h3 className={styles.choose}>Choose ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}>Add to Cart</button>
        </div>
    
    </div>
    
    
    </div>
)

  }


  export default Product;