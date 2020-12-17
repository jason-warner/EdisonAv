import styles from '../../styles/components/Cart/CartItems.module.css'
import products from './data/products.json'

const CartItems = ({ myArr, clickedItem }) => {



    return (
        <ul className={styles.addedBox}>
            {clickedItem && myArr.map((e, i) => {
                return (
                    <li className={styles.ulOne} key={i}>
                        {products.map((item) => {
                            if (item.sku === e) {
                                let
                                    name = item.name,
                                    image = item.image,
                                    price = item.price,
                                    sku = item.sku;
                                return (
                                    <div className={styles.cartItems} key={sku}>
                                        <div className={styles.itemDetail}>
                                            <img src={image} alt={name} />
                                            <div className={styles.itemDeets}>
                                                <h3>{name}</h3>
                                                <p>{sku}</p>
                                            </div>
                                        </div>
                                        <div className={styles.itemPrice}>
                                            <h3>{"$" + price + ".00"}</h3>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </li>
                );
            })}
        </ul>
    )
}

export default CartItems;