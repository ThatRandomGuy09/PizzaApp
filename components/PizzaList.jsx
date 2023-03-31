import styles from "../styles/Products.module.css"
import Card from './PizzaCard';

const Products =()=>{

    return(

        <div className={styles.container}>

        <h1 className={styles.title}>PizzaApp</h1>
        <p className={styles.description}>A PizzaApp is a mobile application that allows users to order pizzas from their favorite pizzerias or restaurants. The app typically displays menus, prices, and allows users to customize their orders by selecting toppings, sauces, and crust types. The app may also offer various payment options, including credit cards, debit cards, or digital wallets, and may provide real-time tracking of the delivery status of the order.
        </p>
        <div className={styles.wrapper}>

        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
           
        
        
        
        </div>

        
        
        </div>
    )

}

export default Products;