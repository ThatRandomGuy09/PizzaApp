import styles from "../styles/Cart.module.css";
import Image from "next/legacy/image";


const Cart = () => {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <table className={styles.table}>
           
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/pizza.png"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>Margherita</span>
              </td>
              <td>
                <span className={styles.extras}>
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>₹250</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>₹500</span>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/pizza.png"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>Margherita</span>
              </td>
              <td>
                <span className={styles.extras}>
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>₹250</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>₹500</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Subtotal:</b>₹1000
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Discount:</b>₹0
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total:</b>₹1000
            </div>
            <button className={styles.button}>CHECKOUT NOW!</button>
          </div>
        </div>
      </div>
    );
  };


export default Cart;