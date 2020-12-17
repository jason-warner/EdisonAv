import products from './data/products.json'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import styles from '../../styles/components/Cart/Products.module.css'

const Products = ({ cartEmpty, updateMyArr, itemClicked }) => {
  const { addItem, removeItem } = useShoppingCart()
  return (
    <ul className={styles.cartList}>
      {products.map((product) => (
        <li key={product.sku}>
          <div className={styles.itemImageContainer}>
            <img src={product.image} alt={product.name} />
          </div>
          <h2>{product.name}</h2>
          <p>
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}
          </p>
          <div className={styles.cartOpts}>
            <button
              onClick={() => { 
                addItem(product); 
                cartEmpty(false); 
                updateMyArr(arr => [...arr, product.sku]),
                itemClicked(true);
                  }}
            >
              Add to cart
          </button>
            <button
              onClick={() => { removeItem(product.sku); cartEmpty(true) }}
            >
              Remove
          </button>
          </div>
        </li>
      ))}
      
    </ul>
  )
}

export default Products


{/* <ul className={styles.cartList}>
                            {
                                Items.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <div className={styles.itemImageContainer}>
                                                <img src={item.itemImage} alt="" />
                                            </div>
                                            <div className={styles.itemInfo}>
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                                <span>{item.price}</span>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul> */}












                      //   .cartList {
                      //     /* color: white; */
                      //     padding: 0;
                      //     margin: 0 1em;
                      //     list-style-type: none;
                      //     font-size: 22px;
                      //     min-width: 250px;
                      //     max-width: 500px;
                      //     width: 100%;
                      //     margin: 0 auto;
                      // }
                      // .cartList > li {
                      //     /* color: white; */
                      //     background-color: whitesmoke;
                      //     margin: 1em 0;
                      //     border-radius: 20px;
                      //     height: 10vh;
                      // }

                      // .itemImageContainer > img {
                      //     height: 100%;
                      //     margin: 0;
                      //     padding: 0;
                      // }

                      // .itemInfo {
                      //     display: inline-block;
                      //     float: right;
                      //     width: 80%;
                      //     height: 100%;
                      //     text-align: right;
                      //     margin: 0;
                      //     padding: 0;
                      //     text-align: center;
                      // }
                      // .itemInfo > h3, .itemInfo > p, .itemInfo > span {
                      //     margin: 0;
                      //     padding: 0;
                      // }
                      // .itemImageContainer {
                      //     display: inline-block;
                      //     height: 100%;
                      //     width: 20%;
                      //     height: 100%;
                      //     margin: 0;
                      //     padding: 0;
                      // }