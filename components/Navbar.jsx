import Image from "next/image";
import styles from "../styles/Navbar.module.css"

const NavBar = () => {
    return (
      <div className={styles.container}>
      <div className={styles.item}>
      <div className={styles.callButton}>
         <Image src="/img/Telephone.jpg" alt="" width="32" height="32"/>
         </div>
         <div className={styles.texts}>
         <div className={styles.text}> ORDER NOW </div>
         <div className={styles.text}>  7894561230 </div>
         </div>
      </div>
      <div className={styles.item}>
      <ul className={styles.list}>
        <li className={styles.listItem}>HomePage</li>
        <li className={styles.listItem}>Products</li>
        <li className={styles.listItem}>Menu</li>
        <Image src="/img/Logo.jpg" alt="" width="170" height="80" priority={false}/>
        <li className={styles.listItem}>Events</li>
        <li className={styles.listItem}>Blog</li>
        <li className={styles.listItem}>Contacts</li>
      
      </ul>
      </div>



      <div className={styles.item}>
      
      <div className={styles.cart}>
      <Image src="/img/cart.png" alt="" width="30" height="30"/>
      <div className={styles.counter}>2</div>
      
      </div>
      </div>
        
      </div>
    );
  }
  
  export default NavBar;
  